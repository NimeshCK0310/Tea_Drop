import { Link } from "react-router-dom";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import ethicalImg from "../assets/ethical.jpg"; // Confirm this path is correct

export default function Ethical() {
  return (
    <section className="relative">
      <img
        src={ethicalImg}
        alt="Woman holding tea cup"
        className="w-full h-[500px] md:h-[600px] object-cover"
        onError={(e) => { e.target.style.display = 'none'; }} // Hide on error
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
        {/* Logo + text */}
        <div className="max-w-md space-y-4 bg-white/70 p-4 rounded-md md:bg-transparent md:p-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ethical_Tea_Partnership_logo.svg/120px-Ethical_Tea_Partnership_logo.svg.png"
            alt="Ethical Tea Partnership Logo"
            className="h-10"
          />
          <p className="text-lg font-medium text-gray-700">
            Taking pride and celebrating purpose with the hands that pluck the tea.
          </p>
          <Link
            to="/hero"
            className="inline-block bg-white text-gray-900 px-4 py-2 rounded-md shadow hover:bg-gray-100"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Up/Down buttons */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <button className="bg-yellow-300 p-2 rounded-full">
          <FiArrowUp />
        </button>
        <button className="bg-yellow-300 p-2 rounded-full">
          <FiArrowDown />
        </button>
      </div>
    </section>
  );
}