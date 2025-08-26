import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // Functional update for state reliability
  };

  return (
    <header className="bg-gradient-to-r from-teal-600 to-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Mobile Menu Button and Logo */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-yellow-300 focus:outline-none transition-transform duration-300 hover:scale-125"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <Link
            to="/"
            className="text-2xl font-bold tracking-widest hover:text-yellow-300 transition-colors duration-300 hover:scale-110"
            aria-label="Home"
          >
            TEA DROP
          </Link>
        </div>

        {/* Desktop Navigation (Left Aligned) */}
        <nav className="hidden md:flex items-center space-x-2">
          <Link
            to="/hero"
            className="text-2xl font-bold tracking-widest pl-1 px-4 py-2 hover:text-yellow-300 transition-colors duration-300 hover:scale-110"
            aria-label="Home"
          >
            TEA DROP
          </Link>
          {/* Teas Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleMenu("teas")}
              className="flex items-center gap-5 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-md transition-all duration-300 hover:shadow-md"
              aria-haspopup="true"
              aria-expanded={openMenu === "teas"}
            >
              Teas <FiChevronDown size={14} />
            </button>
            {openMenu === "teas" && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg border border-gray-200 rounded-md w-40 origin-top-left transform scale-100 opacity-100 transition-all duration-300 ease-in-out z-50">
                <Link
                  to="/black-tea"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Black Tea"
                >
                  Black Tea
                </Link>
                <Link
                  to="/green-tea"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Green Tea"
                >
                  Green Tea
                </Link>
                <Link
                  to="/herbal"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Herbal Tea"
                >
                  Herbal Tea
                </Link>
              </div>
            )}
          </div>

          {/* Tea Accessories Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleMenu("accessories")}
              className="flex items-center gap-1 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-md transition-all duration-300 hover:shadow-md"
              aria-haspopup="true"
              aria-expanded={openMenu === "accessories"}
            >
              Tea Accessories <FiChevronDown size={14} />
            </button>
            {openMenu === "accessories" && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg border border-gray-200 rounded-md w-48 origin-top-left transform scale-100 opacity-100 transition-all duration-300 ease-in-out z-50">
                <Link
                  to="/teapots"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Teapots"
                >
                  Teapots
                </Link>
                <Link
                  to="/cups"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Cups & Mugs"
                >
                  Cups & Mugs
                </Link>
                <Link
                  to="/infusers"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Infusers"
                >
                  Infusers
                </Link>
              </div>
            )}
          </div>

          {/* Simple Links */}
          <Link
            to="/gifts"
            className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-md transition-all duration-300 hover:shadow-md"
            aria-label="Gifts"
          >
            Gifts
          </Link>
          <Link
            to="/explore"
            className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-md transition-all duration-300 hover:shadow-md"
            aria-label="Explore"
          >
            Explore
          </Link>
          <Link
            to="/wholesale"
            className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-md transition-all duration-300 hover:shadow-md"
            aria-label="Wholesale"
          >
            Wholesale
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FiSearch
            className="text-white hover:text-yellow-300 cursor-pointer transition-transform duration-300 hover:scale-150"
            size={20}
            aria-label="Search"
          />
          <FiUser
            className="text-white hover:text-yellow-300 cursor-pointer transition-transform duration-300 hover:scale-150"
            size={20}
            aria-label="User"
          />
          <FiHeart
            className="text-white hover:text-yellow-300 cursor-pointer transition-transform duration-300 hover:scale-150"
            size={20}
            aria-label="Wishlist"
          />
          <FiShoppingBag
            className="text-white hover:text-yellow-300 cursor-pointer transition-transform duration-300 hover:scale-150"
            size={20}
            aria-label="Cart"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          isMobileMenuOpen
            ? "flex opacity-100 translate-y-0"
            : "hidden opacity-0 -translate-y-4"
        } md:hidden flex-col items-center space-y-2 absolute top-16 left-0 w-full bg-gray-800 shadow-lg p-4 transition-all duration-300 ease-in-out z-40`}
      >
        {/* Dropdowns for Mobile */}
        <div className="w-full">
          <div className="relative w-full">
            <button
              onClick={() => toggleMenu("teas")}
              className="flex items-center justify-between gap-1 px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-all duration-300 hover:shadow-md w-full"
              aria-haspopup="true"
              aria-expanded={openMenu === "teas"}
            >
              Teas <FiChevronDown size={14} />
            </button>
            {openMenu === "teas" && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg border border-gray-200 rounded-md w-full origin-top-left transform scale-100 opacity-100 transition-all duration-300 ease-in-out z-50">
                <Link
                  to="/black-tea"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Black Tea"
                >
                  Black Tea
                </Link>
                <Link
                  to="/green-tea"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Green Tea"
                >
                  Green Tea
                </Link>
                <Link
                  to="/herbal"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Herbal Tea"
                >
                  Herbal Tea
                </Link>
              </div>
            )}
          </div>

          <div className="relative w-full">
            <button
              onClick={() => toggleMenu("accessories")}
              className="flex items-center justify-between gap-1 px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-all duration-300 hover:shadow-md w-full"
              aria-haspopup="true"
              aria-expanded={openMenu === "accessories"}
            >
              Tea Accessories <FiChevronDown size={14} />
            </button>
            {openMenu === "accessories" && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg border border-gray-200 rounded-md w-full origin-top-left transform scale-100 opacity-100 transition-all duration-300 ease-in-out z-50">
                <Link
                  to="/teapots"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Teapots"
                >
                  Teapots
                </Link>
                <Link
                  to="/cups"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Cups & Mugs"
                >
                  Cups & Mugs
                </Link>
                <Link
                  to="/infusers"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-700 transition-colors duration-200"
                  aria-label="Infusers"
                >
                  Infusers
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Simple links for Mobile */}
        <Link
          to="/gifts"
          className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-all duration-300 hover:shadow-md block w-full text-center"
          aria-label="Gifts"
        >
          Gifts
        </Link>
        <Link
          to="/explore"
          className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-all duration-300 hover:shadow-md block w-full text-center"
          aria-label="Explore"
        >
          Explore
        </Link>
        <Link
          to="/wholesale"
          className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-all duration-300 hover:shadow-md block w-full text-center"
          aria-label="Wholesale"
        >
          Wholesale
        </Link>
      </nav>
    </header>
  );
}
