import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Helper: navigate to a section even if you're not on "/"
  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate back to home and then scroll after a short delay
      window.location.hash = "#/" + sectionId; 
      window.location.href = "/#/"; // for HashRouter (GitHub Pages)
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-xl shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl font-extrabold text-blue-700 tracking-wide">
          INFERSTRAT
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => handleNavClick("home")}
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("services")}
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 hover:text-blue-500 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg px-6 py-4 space-y-4">
          {["home", "services", "about", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="block text-gray-800 hover:text-blue-500 transition-colors w-full text-left"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}

        </div>
      )}
    </nav>
  );
}
