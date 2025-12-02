import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./Pages/Home";
import Pizza from "./Pages/Pizza";
import Snacks from "./Pages/Snacks";
import Burger from "./Pages/Burger";
import Drinks from "./Pages/Drinks";
import ProductDetails from "./data/ProductDetails";
import CartPage from "./Pages/Cart";

import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
