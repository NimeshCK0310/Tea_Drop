import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function TopBar() {
  const [currency, setCurrency] = useState("AUD $");

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 text-xs shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center justify-between gap-4 sm:gap-6">
        {/* Left: currency selector */}
        <div className="flex items-center gap-2 text-gray-700">
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-white border border-gray-200 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
          >
            <option>AUD $</option>
            <option>USD $</option>
            <option>EUR €</option>
          </select>
        </div>

        {/* Center: promo message */}
        <p className="text-center flex-1 text-gray-600 font-medium animate-pulse-slow">
          FREE SHIPPING WHEN YOU SHOP FOR $60 AND MORE
        </p>

        {/* Right: rewards link */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-gray-700 hover:text-teal-600 hover:underline underline-offset-2 transition-colors duration-200 font-semibold"
        >
          <AiFillStar size={16} className="text-teal-500" />
          <span>TEA DROP REWARDS</span>
        </a>
      </div>
    </div>
  );
}