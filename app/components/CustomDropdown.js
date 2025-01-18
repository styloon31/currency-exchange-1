"use client"
import { useState } from "react";

export default function CustomDropdown({
  selectedCurrency,
  setSelectedCurrency,
  exchangeRates,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelection = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Selected Currency */}
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <img
            src={exchangeRates[selectedCurrency].flag}
            alt={`${selectedCurrency} flag`}
            className="w-5 h-5"
          />
          <span>{selectedCurrency}</span>
        </div>
        <span>▼</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {Object.keys(exchangeRates).map((currency) => (
            <div
              key={currency}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelection(currency)}
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
}
