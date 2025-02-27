"use client";

import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function ExchangeRatesPage() {
    const [rates, setRates] = useState([]);

    useEffect(() => {
        const docRef = doc(db, "exchange-rates", "rates"); // Firestore path
        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            if (snapshot.exists()) {
                setRates(Object.entries(snapshot.data())); // Convert object to array
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="p-6 bg-gray-50 min-h-screen pt-20">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
                Live Exchange Rates
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {rates.length > 0 ? (
                    rates.map(([currency, { buyRate, sellRate, flag, symbol }]) => (
                        <div key={currency} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center space-y-4">
                            <img src={flag} alt={currency} className="w-16 h-16 rounded-full shadow-md" />
                            <h2 className="text-2xl font-semibold text-gray-700">{currency} <span className="text-gray-500">({symbol})</span></h2>
                            <div className="w-full text-center">
                                <p className="text-gray-500">Buy: <span className="font-bold text-green-600 text-lg">{buyRate}</span></p>
                                <p className="text-gray-500">Sell: <span className="font-bold text-red-600 text-lg">{sellRate}</span></p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">Loading exchange rates...</p>
                )}
            </div>
        </div>
    );
}
