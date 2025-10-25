// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="flex flex-col justify-center max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 p-4">Orakzai Mart</h3>
            <p className="text-gray-300">Digital Shop for Dress, General, and Smart Devices</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-gray-300 hover:text-white">Home</a>
              <a href="/products" className="text-gray-300 hover:text-white">Products</a>
              <a href="/about" className="text-gray-300 hover:text-white">About Us</a>
              <a href="/cart" className="text-gray-300 hover:text-white">Cart</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">TikTok</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2025 Orakzai Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;