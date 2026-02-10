

// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ALTAknots from  "./Mobile/img/ALTAKnots.png"; // Ensure this path is correct based on your project structure

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/service" },
  { name: "Pricing", path: "/pricing" },
  { name: "Technology", path: "/technology" },
  { name: "Tech news", path: "/technews" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl md:text-3xl font-extrabold tracking-tight bg-linear-to-r from-white to-white bg-clip-text text-transparent hover:from-red-400 hover:via-white hover:to-red-400 transition-all duration-500"
            > 
              <div className="flex items-center gap-2">
              <img src={ALTAknots} alt="ALTAKnots Logo" className="h-10 w-10 md:h-18 pt-5 md:w-50 " />
            </div>
            </NavLink>
            {/* Optional small tagline - remove if not needed */}
            {/* <p className="text-xs text-gray-500 mt-0.5">IT Solutions</p> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-red-950/40 text-red-400 border border-red-900/50 shadow-sm"
                      : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border border-transparent hover:border-red-900/40"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-950/30 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-3 pb-5 space-y-2 bg-black/95 border-t border-gray-800/50">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3.5 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? "bg-red-950/50 text-red-400 border-l-4 border-red-600"
                    : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border-l-4 border-transparent"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Optional Auth buttons - styled to match */}
          <div className="pt-5 px-2 flex flex-col gap-4 border-t border-gray-800/50 mt-4">
            <button className="w-full py-3.5 text-gray-300 hover:text-white border border-gray-700 rounded-lg hover:bg-gray-800/50 transition">
              Login
            </button>
            <button className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-red-900/40">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
