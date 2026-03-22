import React, { useState } from "react";
import { products } from "../data/data";
import "./Shop.css";

export default function Shop() {
  const [search, setSearch] = useState("");
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="shop">
      <div className="container">
        <div className="shop__header">
          <h1 className="section-title">Shop</h1>
          <div className="shop__search-wrap">
            <input
              className="shop__search"
              placeholder="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <svg className="shop__search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M13 13l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="shop__grid">
          {filtered.map(p => (
            <div key={p.id} className="shop__card">
              <div className="shop__img-wrap">
                <img src={p.img} alt={p.name}/>
              </div>
              <p className="shop__name">{p.name}</p>
              <p className="shop__price">{p.price}</p>
              <button className="btn-dark shop__btn">Add to Cart</button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="shop__empty">No products found for "{search}"</p>
        )}

        <div className="shop__more">
          <button className="shop__more-btn" aria-label="Load more">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 10l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Sofa decoration */}
      <div className="shop__sofa">
        <img src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&w=700" alt="Sofa decoration"/>
      </div>
    </main>
  );
}
