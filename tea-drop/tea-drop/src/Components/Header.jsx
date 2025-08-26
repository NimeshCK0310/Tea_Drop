import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-light tracking-widest text-gray-700 hover:text-gray-900 transition-colors duration-200">
          TEA DROP
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300`}
        >
          {/* Teas */}
          <div className="relative group w-full md:w-auto">
            <button
              onClick={() => toggleMenu("teas")}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 w-full md:w-auto py-2 md:py-0"
            >
              Teas <FiChevronDown size={14} />
            </button>
            {openMenu === "teas" && (
              <div className="absolute left-0 mt-2 bg-white shadow-md border border-gray-200 rounded-md w-40">
                <Link to="/black-tea" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                  Black Tea
                </Link>
                <Link to="/green-tea" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                  Green Tea
                </Link>
                <Link to="/herbal" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                  Herbal Tea
                </Link>
              </div>
            )}
          </div>

          {/* Tea Accessories */}
          <div className="relative group w-full md:w-auto">
            <button
              onClick={() => toggleMenu("accessories")}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 w-full md:w-auto py-2 md:py-0"
            >
              Tea Accessories <FiChevronDown size={14} />
            </button>
            {openMenu === "accessories" && (
              <div className="absolute left-0 mt-2 bg-white shadow-md border border-gray-200 rounded-md w-48">
                <Link to="/teapots" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                  Teapots
                </Link>
                <Link to="/cups" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                  Cups & Mugs
                </Link>
                <Link to="/infusers" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                  Infusers
                </Link>
              </div>
            )}
          </div>

          {/* Simple links */}
          <Link
            to="/gifts"
            className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200 block md:inline-block py-2 md:py-0 w-full md:w-auto"
          >
            Gifts
          </Link>
          <Link
            to="/explore"
            className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200 block md:inline-block py-2 md:py-0 w-full md:w-auto"
          >
            Explore
          </Link>
          <Link
            to="/wholesale"
            className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200 block md:inline-block py-2 md:py-0 w-full md:w-auto"
          >
            Wholesale
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FiSearch className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200" size={18} />
          <FiUser className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200" size={18} />
          <FiHeart className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200" size={18} />
          <FiShoppingBag className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200" size={18} />
        </div>
      </div>
    </header>
  );
}