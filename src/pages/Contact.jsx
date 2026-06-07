import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6"

export default function Contact() {
  return (
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start a New Project Today
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Thinking of using <span className="font-semibold text-blue-700">social media </span> 
            in favor of your business ? Want to make your brand stand out among a trendy audience, 
            or uncover insights into a broader audience that hasn’t been measured before? 
            <br />
            Let’s work together to bring your vision to life.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/inferstrat" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF className="text-2xl text-blue-600 hover:text-white transition" />
            </a>
            <a href="https://www.instagram.com/inferstratmr" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow hover:bg-pink-500 hover:text-white transition">
              <FaInstagram className="text-2xl text-pink-500 hover:text-white transition" />
            </a>
            <a href="https://x.com/inferstrat" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow hover:bg-black hover:text-white transition">
              <FaXTwitter className="text-2xl text-black hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/company/inferstrat-private-limited/" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow hover:bg-blue-700 hover:text-white transition">
              <FaLinkedinIn className="text-2xl text-blue-700 hover:text-white transition" />
            </a>
            <a href="mailto:contactus@inferstrat.com" aria-label="Email Inferstrat"
              className="p-4 bg-white rounded-full shadow hover:bg-green-600 hover:text-white transition">
              <FaEnvelope className="text-2xl text-green-600 hover:text-white transition" />
            </a>
          </div>
        </div>
      </section>

  );
}
