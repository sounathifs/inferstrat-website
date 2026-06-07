import React from "react";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-xl p-6 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <img src={icon} alt={title} className="h-16 w-16 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
