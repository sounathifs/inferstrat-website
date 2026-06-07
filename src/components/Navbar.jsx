import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { useTheme } from "../ThemeContext";

const LINKS = [
  { id: "approach", label: "Approach" },
  { id: "philosophy", label: "Method" },
  { id: "capabilities", label: "Capabilities" },
  { id: "build", label: "Build" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth-scroll to a section (anchor hrefs are reserved by HashRouter).
  const goTo = (e, id) => {
    e.preventDefault();
    setOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="hdr">
      <div className="wrap nav">
        <a
          className="brand"
          href="#top"
          aria-label="Inferstrat home"
          onClick={(e) => goTo(e, "top")}
        >
          <BrandLogo />
          <span className="name">
            Infer<span className="accent">Strat</span>
          </span>
        </a>

        <div className="nav-right">
          <nav className={`nav-links${open ? " open" : ""}`} id="navlinks">
            {LINKS.map((l) => (
              <a
                key={l.id}
                className="lnk"
                href={`#${l.id}`}
                onClick={(e) => goTo(e, l.id)}
              >
                {l.label}
              </a>
            ))}
            <a
              className="cta"
              href="#contact"
              onClick={(e) => goTo(e, "contact")}
            >
              Get in touch
            </a>
          </nav>

          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggle}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>

          <button
            className={`nav-toggle${open ? " open" : ""}`}
            id="navtoggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
