import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label:"Home",       to:"/" },
  { label:"Shop",       to:"/shop" },
  { label:"About Us",   to:"/about" },
  { label:"Services",   to:"/services" },
  { label:"Blog",       to:"/blog" },
  { label:"Contact Us", to:"/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">FurniFlow</Link>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className={`navbar__link${pathname === l.to ? " active" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__icon" aria-label="Account">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="navbar__icon" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 3h1.5L7 13h9l2-7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="16.5" r="1.2" fill="currentColor"/>
              <circle cx="14" cy="16.5" r="1.2" fill="currentColor"/>
            </svg>
          </button>
          <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          {links.map((l) => (
            <Link key={l.label} to={l.to}
              className={`navbar__mobile-link${pathname === l.to ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
