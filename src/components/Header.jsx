import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../context/CartContext";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Pizza", path: "/pizza" },
  { name: "Snacks", path: "/snacks" },
  { name: "Burger", path: "/burger" },
  { name: "Drinks", path: "/drinks" },
];

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "hover:text-orange-500 transition-colors duration-300";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center py-4 px-6 justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/aa.png"
            alt="Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex justify-center space-x-8 text-black text-lg">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path} className={linkClass}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cart + Sign In + Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition-colors duration-300 flex items-center relative"
          >
            <IoCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 text-xs rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link
            to="/signin"
            className="border border-orange-500 text-orange-500 px-4 py-1 rounded hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            Sign In
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-black ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-black text-lg">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
