import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between transition-all duration-300 ease-in-out">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-extralight tracking-widest text-gray-900 hover:text-teal-600 transition-colors duration-300">
          TEA DROP
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {/* Teas */}
          <div className="relative group">
            <button
              onClick={() => toggleMenu("teas")}
              className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              Teas <FiChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
            </button>
            {openMenu === "teas" && (
              <div className="absolute left-0 mt-2 bg-white shadow-xl border border-gray-100 rounded-lg w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/black-tea" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-t-lg transition-colors duration-200">
                  Black Tea
                </Link>
                <Link to="/green-tea" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200">
                  Green Tea
                </Link>
                <Link to="/herbal" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-b-lg transition-colors duration-200">
                  Herbal Tea
                </Link>
              </div>
            )}
          </div>

          {/* Tea Accessories */}
          <div className="relative group">
            <button
              onClick={() => toggleMenu("accessories")}
              className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              Tea Accessories <FiChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
            </button>
            {openMenu === "accessories" && (
              <div className="absolute left-0 mt-2 bg-white shadow-xl border border-gray-100 rounded-lg w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/teapots" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-t-lg transition-colors duration-200">
                  Teapots
                </Link>
                <Link to="/cups" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200">
                  Cups & Mugs
                </Link>
                <Link to="/infusers" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-b-lg transition-colors duration-200">
                  Infusers
                </Link>
              </div>
            )}
          </div>

          {/* Simple links with hover effects */}
          <Link to="/gifts" className="text-gray-700 hover:text-teal-600 hover:underline underline-offset-4 transition-all duration-300">
            Gifts to Celebrate
          </Link>
          <Link to="/explore" className="text-gray-700 hover:text-teal-600 hover:underline underline-offset-4 transition-all duration-300">
            Explore
          </Link>
          <Link to="/wholesale" className="text-gray-700 hover:text-teal-600 hover:underline underline-offset-4 transition-all duration-300">
            Wholesale
          </Link>
        </nav>

        {/* Icons with hover effects */}
        <div className="flex items-center space-x-6">
          <FiSearch className="text-gray-600 hover:text-teal-600 cursor-pointer transition-colors duration-300" size={20} />
          <FiUser className="text-gray-600 hover:text-teal-600 cursor-pointer transition-colors duration-300" size={20} />
          <FiHeart className="text-gray-600 hover:text-teal-600 cursor-pointer transition-colors duration-300" size={20} />
          <FiShoppingBag className="text-gray-600 hover:text-teal-600 cursor-pointer transition-colors duration-300" size={20} />
          <span className="text-sm text-gray-500">0</span>
        </div>
      </div>
    </header>
  );
}