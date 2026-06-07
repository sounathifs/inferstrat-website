import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const goTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <BrandLogo />
            <div className="name">
              Infer<span className="accent">Strat</span>
            </div>
            <p>
              Bringing your vision to life — making organisations more data
              driven, generating insights from less traveled paths of Data
              Analytics and Social Intelligence.
            </p>
          </div>
          <div className="foot-col">
            <h4>Office</h4>
            <span>Inferstrat Private Limited</span>
            <span>620 Purbachal Road, Golden Park,</span>
            <span>Haltu, Kolkata, West Bengal,</span>
            <span>India — 700078</span>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <a href="mailto:admin@inferstrat.com">admin@inferstrat.com</a>
            <a href="mailto:contactus@inferstrat.com">
              contactus@inferstrat.com
            </a>
            <a href="#approach" onClick={(e) => goTo(e, "approach")}>
              Approach
            </a>
            <a href="#capabilities" onClick={(e) => goTo(e, "capabilities")}>
              Capabilities
            </a>
          </div>
        </div>
        <div className="foot-bot">
          <span>Copyright © 2025 Inferstrat.</span>
          <span style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <Link to="/policy/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link to="/policy/privacy-policy">Privacy Policy</Link>
          </span>
          <span>
            Generating insights from the less traveled paths of data analytics.
          </span>
        </div>
      </div>
    </footer>
  );
}
