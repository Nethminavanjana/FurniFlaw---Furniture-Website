import React from "react";
import { Link } from "react-router-dom";
import { services, products } from "../data/data";
import Reviews from "../components/Reviews";
import ServiceIcon from "../components/ServiceIcon";
import "./Services.css";


export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">Services</h1>
            <p className="page-hero__sub">
              We provide stylish, high-quality furniture and easy services to make your home modern
              and comfortable. From design to delivery, we make furniture shopping simple, fast, and stress-free.
            </p>
            <div className="page-hero__btns">
              <Link to="/shop" className="btn-primary">Shop Now</Link>
              <Link to="/about" className="btn-outline">Explore</Link>
            </div>
          </div>
          <div className="page-hero__img">
            <img src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&w=600" alt="Sofa"/>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="srv-cards">
        <div className="container">
          <div className="srv-cards__grid">
            {services.map(s=>(
              <div key={s.title} className="srv-cards__card">
                <div className="srv-cards__icon"><ServiceIcon type={s.icon}/></div>
                <h3 className="srv-cards__name">{s.title}</h3>
                <p className="srv-cards__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crafted Material */}
      <section className="srv-craft">
        <div className="container srv-craft__inner">
          <div className="srv-craft__text">
            <h2 className="section-title">Crafted with<br/>excellent Material</h2>
            <p className="section-sub" style={{marginBottom:"1.4rem"}}>
              Every piece at FurniFlow is crafted with excellent materials, combining durability,
              elegance, and comfort to create furniture that complements your lifestyle.
            </p>
            <Link to="/shop" className="btn-dark">Explore</Link>
          </div>
          <div className="srv-craft__products">
            {products.slice(0,3).map(p=>(
              <div key={p.id} className="srv-craft__item">
                <img src={p.img} alt={p.name}/>
                <p className="srv-craft__name">{p.name}</p>
                <p className="srv-craft__price">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
    </main>
  );
}
