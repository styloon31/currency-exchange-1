"use client";
import { useEffect, useState } from "react";
import { collection, addDoc, doc, getDoc } from "firebase/firestore"; // Firestore imports
import Swal from "sweetalert2";
import { db } from "../firebase";
import { ArrowDownNarrowWide, ArrowDownToLine, ArrowUpToLine, Banknote, LocateIcon, MapPin, Phone, UserPen } from "lucide-react";

export default function FormTabs() {
  const [activeTab, setActiveTab] = useState("Buy"); // Active tab state
  const [exchangeRates, setExchangeRates] = useState({});
  const [inrAmount, setInrAmount] = useState("");
  const [forexAmount, setForexAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [conversionRate, setConversionRate] = useState(86.27);
  const [conversionRateSell, setConversionRateSell] = useState(86.27);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const exchangeRates = {
  //   USD: { rate: 86.7, symbol: "$", flag: "https://flagcdn.com/us.svg" },
  //   EUR: { rate: 88.8, symbol: "€", flag: "https://flagcdn.com/eu.svg" },
  //   GBP: { rate: 107.5, symbol: "£", flag: "https://flagcdn.com/gb.svg" },
  //   AUD: { rate: 53.9, symbol: "A$", flag: "https://flagcdn.com/au.svg" },
  //   CAD: { rate: 60.65, symbol: "C$", flag: "https://flagcdn.com/ca.svg" },
  //   SGD: { rate: 63.65, symbol: "S$", flag: "https://flagcdn.com/sg.svg" },
  //   JPY: { rate: 0.562, symbol: "¥", flag: "https://flagcdn.com/jp.svg" },
  //   CHF: { rate: 95.5, symbol: "CHF", flag: "https://flagcdn.com/ch.svg" },
  //   THB: { rate: 2.535, symbol: "฿", flag: "https://flagcdn.com/th.svg" },
  //   AED: { rate: 23.7, symbol: "د.إ", flag: "https://flagcdn.com/ae.svg" },
  //   CNY: { rate: 12.35, symbol: "¥", flag: "https://flagcdn.com/cn.svg" },
  //   MYR: { rate: 20.02, symbol: "RM", flag: "https://flagcdn.com/my.svg" },
  //   VND: { rate: 0.0038, symbol: "₫", flag: "https://flagcdn.com/vn.svg" },
  //   IDR: { rate: 0.00573, symbol: "Rp", flag: "https://flagcdn.com/id.svg" },
  //   HKD: { rate: 11.62, symbol: "HK$", flag: "https://flagcdn.com/hk.svg" },
  //   TRL: { rate: 3.0, symbol: "₺", flag: "https://flagcdn.com/tr.svg" },
  //   NZD: { rate: 49.4, symbol: "NZ$", flag: "https://flagcdn.com/nz.svg" },
  // };

  useEffect(() => {
    // Fetch exchange rates from Firestore
    const fetchExchangeRates = async () => {
      try {
        const docRef = doc(db, "exchange-rates", "rates"); // Replace "rates" with your document ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const rates = docSnap.data();
          setExchangeRates(rates);
          setConversionRate(rates[selectedCurrency]?.buyRate || 0);
          setConversionRateSell(rates[selectedCurrency]?.sellRate || 0);
        } else {
          console.error("No exchange rates found");
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, [selectedCurrency]);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setConversionRate(exchangeRates[currency].buyRate);
    setConversionRateSell(exchangeRates[currency].sellRate);
    resetAmounts();
    setIsDropdownOpen(false);
  };

  const resetAmounts = () => {
    setInrAmount("");
    setForexAmount("");
  };

  const handleInrChange = (e) => {
    const inr = e.target.value;
    setInrAmount(inr);
    setForexAmount(inr ? (inr / conversionRate).toFixed(2) : "");
  };

  const handleForexChange = (e) => {
    const forex = e.target.value;
    setForexAmount(forex);
    setInrAmount(forex ? (forex * conversionRate).toFixed(2) : "");
  };

  const validateForm = () => {
    if (!name || !phone || !inrAmount || !forexAmount) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required!",
      });
      return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Phone number must be exactly 10 digits!",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const requestData = {
      name,
      phone,
      forexAmount,
      inrAmount,
      selectedCurrency,
      conversionRate,
      city,
      timestamp: new Date(),
    };

    // Determine collection based on activeTab
    const collectionName =
      activeTab === "Buy" ? "buy-requests" : "sell-requests";

    try {
      await addDoc(collection(db, collectionName), requestData);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: `Your ${activeTab} request has been submitted successfully!`,
      });

      setName("");
      setPhone("");
      setCity("");
      resetAmounts();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  const renderCustomDropdown = () => (
    <div className="relative">
      <button
        type="button"
        className="px-4 py-2 gap-2 border rounded-lg flex items-center justify-between w-full focus:outline-none focus:ring-2 focus:ring-darkGreen"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="flex items-center gap-2">
          <img
            src={exchangeRates[selectedCurrency]?.flag}
            alt={`${selectedCurrency} flag`}
            className="w-5 h-5"
          />
          <span>{selectedCurrency}</span>
        </div>
        {isDropdownOpen?(
          <span className=""><ArrowUpToLine /></span>
        ):(<span className=""><ArrowDownToLine /></span>)}
        
      </button>
      {isDropdownOpen && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {Object.keys(exchangeRates).map((currency) => (
            <div
              key={currency}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleCurrencyChange(currency)}
            >
              <img
                src={exchangeRates[currency].flag}
                alt={`${currency} flag`}
                className="w-5 h-5"
              />
              <span>{currency}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderForm = () => {
    if (activeTab === "Sell") {
      return (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Form fields for Sell */}
          <div>
            <label className="flex gap-2 text-gray-700 font-medium mb-1 items-center">
              <MapPin /> Select City
            </label>
            <select
              className="w-full px-4 py-2 shadow-md border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Delhi NCR</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <Banknote /> Forex Amount
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-gray-100 text-gray-700 font-mono px-4 py-2 rounded-lg border">
                {exchangeRates[selectedCurrency]?.symbol}
              </span>
              <input
                type="number"
                value={forexAmount}
                onChange={handleForexChange}
                placeholder="Forex Amount"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
              />
              {renderCustomDropdown()}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <Banknote /> INR Amount
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg border">
                ₹
              </span>
              <input
                type="number"
                value={inrAmount}
                onChange={handleInrChange}
                placeholder="INR Amount"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
              />
              <span className="text-gray-500 text-sm">
                1 = ₹ {conversionRateSell}
              </span>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <UserPen />
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <Phone /> Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-darkGreen text-white py-3 rounded-lg hover:bg-green-700transition text-sm"
            >
              Request a Callback
            </button>
          </div>
        </form>
      );
    } else if (activeTab === "Buy") {
      return (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="flex gap-2 text-gray-700 font-medium mb-1 items-center">
              <MapPin /> Select City
            </label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Delhi NCR</option>
            </select>
          </div>

          {/* INR Amount Field */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <Banknote /> INR Amount
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg border">
                ₹
              </span>
              <input
                type="number"
                value={inrAmount}
                onChange={handleInrChange}
                placeholder="INR Amount"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
              />
              <span className="text-gray-500 text-sm">
                1 = ₹ {conversionRate}
              </span>
            </div>
          </div>

          {/* Forex Amount Field */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <Banknote /> Forex Amount
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-gray-100 text-gray-700 font-mono px-4 py-2 rounded-lg border">
                {exchangeRates[selectedCurrency]?.symbol}
              </span>
              <input
                type="number"
                value={forexAmount}
                onChange={handleForexChange}
                placeholder="Forex Amount"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
              />
              {renderCustomDropdown()}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <UserPen />
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <Phone /> Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-darkGreen text-white py-3 rounded-lg hover:bg-green-700 transition text-sm"
            >
              Request a Callback
            </button>
          </div>
        </form>
      );
    }
  };

  return (
    
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white shadow-md border-4 rounded-3xl border-darkGreen z-20">
      <div className="flex justify-center space-x-4 mb-6 border-b-2 border-darkGreering-darkGreen">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "Buy"
              ? "text-darkGreen border-b-2 border-darkGreen"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Buy")}
        >
          Buy Forex
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "Sell"
              ? "text-darkGreen border-b-2 border-darkGreen"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Sell")}
        >
          Sell Forex
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full">{renderForm()}</div>
      </div>
    </div>
  );
}
