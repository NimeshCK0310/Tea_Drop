import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function TopBar() {
  const [currency, setCurrency] = useState("AUD $");

  return (
    <div className="w-full bg-gray-100 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center justify-between">
        {/* Left: currency selector */}
        <div className="flex items-center gap-2 text-gray-600">
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            <option>AUD $</option>
            <option>USD $</option>
            <option>EUR €</option>
          </select>
        </div>

        {/* Center: promo message */}
        <p className="flex-1 text-center text-gray-500 font-medium">
          FREE SHIPPING WHEN YOU SHOP FOR $60 AND MORE
        </p>

        {/* Right: rewards link */}
        <a
          href="#"
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200"
        >
          <AiFillStar size={14} className="text-yellow-400" />
          <span>TEA DROP REWARDS</span>
        </a>
      </div>
    </div>
  );
}
