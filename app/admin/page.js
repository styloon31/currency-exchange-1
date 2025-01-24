"use client";
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firestore imports
import { db } from "../firebase"; // Firebase config

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [exchangeRates, setExchangeRates] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCurrency, setNewCurrency] = useState({
    code: "",
    buyRate: "",
    sellRate: "",
    symbol: "",
    flag: "",
  });

  // Hardcoded password
  const adminPassword = "1234";

  // Fetch exchange rates from Firestore
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const docRef = doc(db, "exchange-rates", "rates"); // Access the "rates" document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const rates = docSnap.data(); // Get the data inside the "rates" document
          setExchangeRates(rates); // Set it to the state
        } else {
          console.error("No rates found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, []);

  // Handle password authentication
  const handleLogin = () => {
    if (password === adminPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  // Handle updating exchange rates
  const handleUpdate = async (currencyCode, updatedRate) => {
    try {
      const docRef = doc(db, "exchange-rates", "rates"); // Access the "rates" document
      const updatedRates = { ...exchangeRates, [currencyCode]: updatedRate };
      await setDoc(docRef, updatedRates, { merge: true }); // Update the document
      setExchangeRates(updatedRates); // Update the state
      alert("Exchange rate updated successfully!");
    } catch (error) {
      console.error("Error updating exchange rate:", error);
    }
  };

  // Handle adding a new currency
  const handleAddCurrency = async () => {
    if (
      !newCurrency.code ||
      !newCurrency.buyRate ||
      !newCurrency.sellRate ||
      !newCurrency.symbol ||
      !newCurrency.flag
    ) {
      alert("All fields are required for a new currency!");
      return;
    }

    try {
      const docRef = doc(db, "exchange-rates", "rates");
      const updatedRates = {
        ...exchangeRates,
        [newCurrency.code]: {
          buyRate: parseFloat(newCurrency.buyRate),
          sellRate: parseFloat(newCurrency.sellRate),
          symbol: newCurrency.symbol,
          flag: newCurrency.flag,
        },
      };

      await setDoc(docRef, updatedRates); // Add the new currency to Firestore
      setExchangeRates(updatedRates); // Update the local state
      setNewCurrency({ code: "", buyRate: "", sellRate: "", symbol: "", flag: "" });
      setShowAddModal(false);
      alert("New currency added successfully!");
    } catch (error) {
      console.error("Error adding new currency:", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 shadow-lg rounded-xl w-11/12 sm:w-96">
          <h1 className="text-2xl font-semibold mb-4 text-gray-700">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
          Manage Exchange Rates
        </h1>

        {/* Existing exchange rates */}
        <div className="mb-10 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">Existing Rates</h2>
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border px-4 sm:px-6 py-3 text-left">Currency</th>
                <th className="border px-4 sm:px-6 py-3 text-left">Buy Rate</th>
                <th className="border px-4 sm:px-6 py-3 text-left">Sell Rate</th>
                <th className="border px-4 sm:px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(exchangeRates).map((currency) => (
                <tr key={currency} className="hover:bg-gray-50">
                  <td className="border px-4 sm:px-6 py-4 font-medium">{currency}</td>
                  <td className="border px-4 sm:px-6 py-4">
                    <input
                      type="number"
                      defaultValue={exchangeRates[currency]?.buyRate}
                      onChange={(e) =>
                        setExchangeRates({
                          ...exchangeRates,
                          [currency]: {
                            ...exchangeRates[currency],
                            buyRate: parseFloat(e.target.value),
                          },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="border px-4 sm:px-6 py-4">
                    <input
                      type="number"
                      defaultValue={exchangeRates[currency]?.sellRate}
                      onChange={(e) =>
                        setExchangeRates({
                          ...exchangeRates,
                          [currency]: {
                            ...exchangeRates[currency],
                            sellRate: parseFloat(e.target.value),
                          },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="border px-4 sm:px-6 py-4">
                    <button
                      onClick={() =>
                        handleUpdate(currency, exchangeRates[currency])
                      }
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add New Currency Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md"
          >
            Add New Currency
          </button>
        </div>

        {/* Add New Currency Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-11/12 sm:w-full max-w-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Add New Currency</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddCurrency();
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Currency Code (e.g., USD)"
                  value={newCurrency.code}
                  onChange={(e) =>
                    setNewCurrency({ ...newCurrency, code: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Buy Rate"
                  value={newCurrency.buyRate}
                  onChange={(e) =>
                    setNewCurrency({ ...newCurrency, buyRate: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Sell Rate"
                  value={newCurrency.sellRate}
                  onChange={(e) =>
                    setNewCurrency({ ...newCurrency, sellRate: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Symbol (e.g., $)"
                  value={newCurrency.symbol}
                  onChange={(e) =>
                    setNewCurrency({ ...newCurrency, symbol: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Flag URL (e.g. https://flagcdn.com/au.svg)"
                  value={newCurrency.flag}
                  onChange={(e) =>
                    setNewCurrency({ ...newCurrency, flag: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
