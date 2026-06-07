import React, { useState } from "react";
import { Link } from "react-router-dom"; // 👈 import this

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center text-white py-8">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="./images/logo.png" 
            alt="Inferstrat"
            className="mx-auto h-10 w-auto object-contain"
          />
        </div>
      <Link
        to="/policy/terms-and-conditions"
        className="text-blue-400 hover:text-blue-300 underline"
      >
        Terms & Conditions
      </Link>

      <Link
        to="/policy/privacy-policy"
        className="text-blue-400 hover:text-blue-300 underline ml-4"
      >
        Privacy Policy
      </Link>

        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} InferStrat — Market Research & Consulting
        </p>
      </footer>
    </>
  );
}