import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="w-full text-center bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-4 py-4 md:justify-around">
        {/* Logo */}
        <Link
          to="/"
          className="text-[40px] flex items-center space-x-2 font-bold text-gray-800"
        >
          <span>Orakzai Mart</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-blue-600">
            Products
          </Link>
          <Link to="/checkout" className="text-gray-600 hover:text-blue-600">
            Checkout
          </Link>
          <Link
            to="/cart"
            className="text-gray-600 hover:text-blue-600 relative"
          >
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {getCartItemsCount()}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-[40px] md:hidden text-2xl font-bold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "×" : "≡"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t z-50 absolute w-full left-0">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/checkout"
              className="text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Checkout
            </Link>
            <Link
              to="/cart"
              className="text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faShoppingCart} size="lg" /> ({getCartItemsCount()})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
