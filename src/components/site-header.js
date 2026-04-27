"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Wins", href: "#wins" },
  { label: "Coffee", href: "#coffee" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="site-header-shell">
      <header
        className={`site-header${isScrolled ? " is-scrolled" : ""}${isOpen ? " is-open" : ""}`}
      >
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <div>
            <span className="brand-name">ODIN/HQ</span>
            <span className="brand-tag">space, signal and craftsmanship</span>
          </div>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <div className={`site-header-panel${isOpen ? " is-open" : ""}`}>
          <nav id="primary-nav" className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link" onClick={handleNavClick}>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <a href="#coffee" className="demo-button" onClick={handleNavClick}>
            Buy coffee
          </a>
        </div>
      </header>
    </div>
  );
}
