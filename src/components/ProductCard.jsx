import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // <-- get addToCart function from context

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-cover rounded mb-4" 
      />
      
      {/* Product Name */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
        {product.title}
      </h3>

      {/* Product Price */}
      <p className="text-gray-700 text-base mb-3">
        ${product.price}
      </p>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
