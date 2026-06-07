import React from "react";

// Geometric "inference path" mark — a constellation of data nodes with one
// accent path diverging from the expected route. Used in the nav + footer.
export default function BrandLogo({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="36" stroke="#6E7A70" strokeWidth="3" />
      <circle
        cx="50"
        cy="50"
        r="23"
        stroke="#4C86E8"
        strokeWidth="3.4"
        strokeDasharray="20 11"
        transform="rotate(-20 50 50)"
      />
      <circle cx="50" cy="50" r="6.5" fill="#4C86E8" />
    </svg>
  );
}
