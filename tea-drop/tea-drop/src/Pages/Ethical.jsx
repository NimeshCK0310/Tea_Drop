import { Link } from "react-router-dom";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import ethicalImg from "../assets/ethical.jpg"; // Using the provided image path

export default function Ethical() {
  return (
    <section className="relative h-screen overflow-hidden bg-gray-100">
      <div className="relative w-full h-full">
        <img
          src={ethicalImg}
          alt="Woman holding tea cup"
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          onError={(e) => { e.target.style.display = 'none'; }}
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white">
          <div className="max-w-md space-y-6 bg-light gray/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <img
                src="data:image/jpeg;base64,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"
                alt="Ethical Tea Partnership Logo"
                className="h-10 border-radion-100 border p-1 rounded-3xl bg-white"
              />
            </div>
            <p className="text-xl md:text-2xl font-medium text-gray-200 drop-shadow-md">
              Taking pride and celebrating<br />purpose with the hands that pluck the tea.
            </p>
            <Link
              to="/hero"
              className="inline-block bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        {/* Up/Down buttons */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          <button className="bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200 shadow-md">
            <FiArrowUp />
          </button>
          <button className="bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200 shadow-md">
            <FiArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}