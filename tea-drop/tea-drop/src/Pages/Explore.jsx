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

import hgreen from "../Assets/hgreen.png";
import birthday from "../Assets/birthday.png";
import spring from "../Assets/spring.png";
import honey from "../assets/honey.png";



export default function Explore() {
  const [activeCategory, setActiveCategory] = useState("Best Sellers");

  const categories = [
    "Best Sellers",
    "black tea",
    "green tea",
    "herbal tea",
    "fruit tea",
  ];

  const products = [
    {
      id: 1,
      name: "Honeydew Green",
      price: 17.5,
      category: "green tea",
      sale: true,
      image: honey,
    },
    {
      id: 2,
      name: "Honeydew Green",
      price: 17.5,
      category: "green tea",
      sale: true,
      image: hgreen,
    },
    {
      id: 3,
      name: "Birthday Cake",
      price: 17.5,
      oldPrice: 20.0,
      category: "herbal tea",
      bestSeller: true,
      image: spring,
    },
    {
      id: 4,
      name: "Spring Green",
      price: 17.5,
      category: "green tea",
      image: birthday,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Categories */}
        <div className="flex flex-col md:flex-row md:items-start mb-8">
          <div className="w-full md:w-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Best Selling Loose Leaf
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  {category.charAt(0).toUpperCase() +
                    category.slice(1).replace("_", " ")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(
              (product) =>
                activeCategory === "Best Sellers" ||
                product.category === activeCategory.toLowerCase()
            )
            .map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  {product.sale && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                  {product.bestSeller && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      BEST SELLER
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <div className="mt-2">
                    {product.oldPrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 line-through">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                        <span className="text-teal-600 font-bold">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-teal-600 font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Shop All Button */}
        <div className="text-center mt-8">
          <button className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300">
            SHOP ALL
          </button>
        </div>
      </div>
    </section>
  );
}
