import React from "react";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Food</h1>
          <p className="text-sm text-white/90">
            India’s favorite home-grown burger, pizza, drinks & snacks chain. Taste the flavor in every bite!
          </p>
          <div className="flex space-x-4 mt-2">
            <IoLogoFacebook size={24} className="hover:text-gray-200 cursor-pointer" />
            <IoLogoInstagram size={24} className="hover:text-gray-200 cursor-pointer" />
            <IoLogoTwitter size={24} className="hover:text-gray-200 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/pizza" className="hover:text-gray-200 transition-colors">Pizza</Link>
            </li>
            <li>
              <Link to="/snacks" className="hover:text-gray-200 transition-colors">Snacks</Link>
            </li>
            <li>
              <Link to="/burger" className="hover:text-gray-200 transition-colors">Burger</Link>
            </li>
            <li>
              <Link to="/drinks" className="hover:text-gray-200 transition-colors">Drinks</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">123 Food Street, Mumbai, India</p>
          <p className="text-sm mt-1">Phone: +91 98765 43210</p>
          <p className="text-sm mt-1">Email: support@food.com</p>
        </div>

        {/* Newsletter / Contact Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <p className="text-sm mb-2">Subscribe for updates & offers:</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-orange-500 font-semibold px-3 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-6 py-4 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Food. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
