import React, { useState } from "react";
import { reviews } from "../data/data";

export default function Reviews() {
  const [active, setActive] = useState(0);
  const r = reviews[active];
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="reviews__title">Customer Reviews</h2>
        <div className="reviews__card" key={active} style={{ animation:"fadeUp 0.4s ease" }}>
          <p className="reviews__text">"{r.text}"</p>
          <img src={r.img} alt={r.name} className="reviews__avatar" />
          <p className="reviews__name">{r.name}</p>
        </div>
        <div className="reviews__dots">
          {reviews.map((_,i)=>(
            <button key={i} className={`reviews__dot${i===active?" active":""}`} onClick={()=>setActive(i)} aria-label={`Review ${i+1}`}/>
          ))}
        </div>
      </div>
    </section>
  );
}
