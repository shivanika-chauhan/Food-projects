import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Footer from '../components/Footer'
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Product not found!</h2>
        <Link
          to="/"
          className="text-orange-500 underline mt-4 inline-block hover:text-orange-600 transition-colors"
        >
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 md:mb-6">
        <Link to="/" className="text-orange-500 hover:underline">Home</Link> &gt;{" "}
        <span className="text-gray-600">{product.category}</span> &gt;{" "}
        <span className="font-semibold">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 bg-white shadow-lg rounded-xl p-4 md:p-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg hover:scale-105 transform transition duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-start space-y-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">{product.name}</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">{product.description}</p>
          <p className="text-2xl md:text-3xl font-bold text-orange-500">₹{product.price}</p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 transform hover:scale-105 mt-2 w-full md:w-auto"
          >
            Add to Cart
          </button>

          {/* Back to Home */}
          <Link
            to="/"
            className="mt-4 inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium shadow transition-colors duration-300 text-center w-full md:w-auto"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
