import React, { useContext, useState } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Footer from '../components/Footer'
const SnacksPage = () => {
  const { addToCart } = useContext(CartContext);

  const snacks = products.filter((p) => p.category === "Snacks");

  // For View All feature
  const [showAll, setShowAll] = useState(false);
  const displayedSnacks = showAll ? snacks : snacks.slice(0, 8);

  return (
    <div className="container mx-auto py-10 px-4">

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Snacks
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {displayedSnacks.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center">

              {/* Equal Image Box */}
              <div className="w-full h-36 sm:h-40 md:h-48 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Product Name */}
              <h3 className="font-semibold text-sm sm:text-base md:text-lg mt-3 text-center line-clamp-2">
                {product.name}
              </h3>

              {/* Price */}
              <p className="font-bold text-orange-500 mt-1 text-center text-sm sm:text-base">
                ₹{product.price}
              </p>

              {/* Add to Cart */}
              <button
                onClick={(e) => {
                  e.preventDefault(); 
                  addToCart(product);
                }}
                className="mt-3 bg-orange-500 text-white px-3 py-1.5 
                           text-sm sm:text-base rounded-md 
                           hover:bg-orange-600 transition-all duration-200 w-full"
              >
                Add to Cart
              </button>

            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      {!showAll && snacks.length > 8 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-orange-500 text-white px-8 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300"
          >
            View All
          </button>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default SnacksPage;
