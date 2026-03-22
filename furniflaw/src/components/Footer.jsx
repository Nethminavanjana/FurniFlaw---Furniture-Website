import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const col1 = ["About Us","Services","Blog","Contact Us"];
const col2 = ["Support","Knowledge Base","Live Chat"];
const col3 = ["Jobs","Our Team","Leadership","Privacy Policy"];

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer__newsletter">
        <div className="container">
          <div className="footer__nl-label">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1.5" y="3.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M1.5 6l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            Subscribe to Newsletter
          </div>
          <div className="footer__nl-row">
            <input className="footer__nl-input" placeholder="Enter your name"  value={name}  onChange={e=>setName(e.target.value)} />
            <input className="footer__nl-input" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
            <button className="footer__nl-btn" aria-label="Subscribe">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M8 2l6 6-6 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <p className="footer__brand-name">FurniFlaw</p>
            <p className="footer__brand-desc">FurniFlow offers modern, stylish, and comfortable furniture to make your home beautiful and functional. We focus on quality, design, and customer satisfaction.</p>
            <div className="footer__socials">
              {[
                { label:"Facebook",  d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label:"Instagram", d:"M16 2H8C4.686 2 2 4.686 2 8v8c0 3.314 2.686 6 6 6h8c3.314 0 6-2.686 6-6V8c0-3.314-2.686-6-6-6zm-4 13.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm4-9a1 1 0 110-2 1 1 0 010 2z" },
                { label:"LinkedIn",  d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 100 4 2 2 0 000-4z" },
                { label:"WhatsApp",  d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51a13 13 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" },
              ].map(s=>(
                <a key={s.label} href="/" className="footer__social" aria-label={s.label}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.d}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            {col1.map(l=><Link key={l} to="/" className="footer__col-link">{l}</Link>)}
          </div>
          <div className="footer__col">
            {col2.map(l=><Link key={l} to="/" className="footer__col-link">{l}</Link>)}
          </div>
          <div className="footer__col">
            {col3.map(l=><Link key={l} to="/" className="footer__col-link">{l}</Link>)}
          </div>
        </div>

        <div className="container footer__bottom">
          <p>© 2026 FurniFlow. All rights reserved. Designed by Nethmi Navanjana.</p>
        </div>
      </div>
    </footer>
  );
}
