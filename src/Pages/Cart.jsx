import React from "react";
import { useCart } from "../context/CartContext";
import Footer from '../components/Footer'
const CartPage = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0)
    return <h2 className="text-center mt-10 text-2xl">Your cart is empty</h2>;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center border p-4 rounded shadow-sm hover:shadow-md transition"
          >
            {/* Product Info */}
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <h3 className="text-right font-bold text-xl mt-6">Total: ₹{total}</h3>
      <Footer/>
    </div>
  );
};

export default CartPage;
