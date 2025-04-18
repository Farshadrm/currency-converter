import React, { useState } from "react";
// 1 Dollar = 860900 Rials
const exchangeRate = 860900;

export default function CurrencyConverter() {
    const [usd, setUsd] = useState<number | string>("");
    const [irr, setIrr] = useState<number | string>("");

    const handleUSDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // console.log(value)
        setUsd(value);
        const num = parseFloat(value);
        if (!isNaN(num)) {
            setIrr((num * exchangeRate).toFixed(0));
        } else {
            setIrr("");
        }
    }; 

    const handleIRRChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setIrr(value);
        const num = parseFloat(value);
        if (!isNaN(num)) {
            setUsd((num / exchangeRate).toFixed(2));
        } else {
            setUsd("");
        }
    };

    return (
        <>
            <p className="position: fixed text-xs">@Ramezani</p>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-bl from-violet-400 to-fuchsia-400 p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl/30 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Currency Converter
                    </h2>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">
                            Dollar (USD)
                        </label>
                        <input
                            type="text"
                            value={usd}
                            onChange={handleUSDChange}
                            placeholder="Enter USD"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">
                            Rial (IRR)
                        </label>
                        <input
                            type="text"
                            value={irr}
                            onChange={handleIRRChange}
                            placeholder="Enter IRR"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
