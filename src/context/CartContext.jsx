// src/context/CartContext.js
import React, { createContext, useState, useContext } from "react";

// 1️⃣ Create Context
export const CartContext = createContext();

// 2️⃣ Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    const exist = cartItems.find(item => item.id === id);
    if (exist.quantity === 1) {
      removeFromCart(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// 3️⃣ Custom hook for convenience
export const useCart = () => useContext(CartContext);
