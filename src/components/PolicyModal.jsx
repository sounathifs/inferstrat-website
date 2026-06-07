import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

// Renders policy content (Terms, Privacy) as a dismissible modal over the site.
// Close via the ✕ button, the Cancel button, backdrop click, or Escape.
export default function PolicyModal({ title, subtitle, children }) {
  const navigate = useNavigate();
  const close = () => navigate("/");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", onKey);
    // Lock background scroll while the modal is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [navigate]);

  return (
    <div className="policy-overlay" onClick={close}>
      <div
        className="policy-modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="policy-modal-head">
          <div>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <button
            type="button"
            className="policy-close"
            onClick={close}
            aria-label="Close"
            title="Close"
          >
            <X />
          </button>
        </header>
        <div className="policy-modal-body">{children}</div>
        <footer className="policy-modal-foot">
          <button type="button" className="policy-cancel" onClick={close}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}
