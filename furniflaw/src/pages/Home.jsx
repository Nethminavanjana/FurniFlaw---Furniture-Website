import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";
import ServiceIcon from "../components/ServiceIcon";
import { products, blogPosts, services } from "../data/data";
import "./Home.css";
import heroImg from "../images/home2.jpg";

const INTERIOR_IMGS = [
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=400",
  "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&w=400",
  "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&w=400",
];

export default function Home() {
  return (
    <main className="home">

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__text">
            <h1 className="home-hero__title">Style that Moves<br/>with You</h1>
            <p className="home-hero__sub">
              FurniFlow brings you modern, versatile furniture designed to fit your lifestyle,
              from cozy living rooms to chic workspaces, our curated collection combines sleek
              design, comfort, and functionality.
            </p>
            <div className="home-hero__btns">
              <Link to="/shop" className="btn-primary">Shop Now</Link>
              <Link to="/about" className="btn-outline">Explore</Link>
            </div>
          </div>
          <div className="home-hero__img">
            <img src={heroImg} alt="Hero sofa"/>
          </div>
        </div>
      </section>

      {/* ── Crafted Material ── */}
      <section className="home-craft">
        <div className="container home-craft__inner">
          <div className="home-craft__text">
            <h2 className="section-title">Crafted with<br/>excellent Material</h2>
            <p className="section-sub" style={{marginBottom:"1.5rem"}}>
              Every piece at FurniFlow is crafted with excellent materials, combining
              durability, elegance, and comfort to create furniture that complements your lifestyle.
            </p>
            <Link to="/shop" className="btn-dark">Explore</Link>
          </div>
          <div className="home-craft__products">
            {products.slice(0,3).map(p=>(
              <div key={p.id} className="home-craft__item">
                <img src={p.img} alt={p.name}/>
                <p className="home-craft__name">{p.name}</p>
                <p className="home-craft__price">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="home-why">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-sub">
            At FurniFlow, we are committed to delivering furniture that perfectly balances quality, style, and comfort.
            Our goal is to help you create a home that reflects your personality while ensuring long-lasting durability.
          </p>
          <div className="home-why__grid">
            {services.slice(0,4).map(s=>(
              <div key={s.title} className="home-why__card">
                <div className="home-why__icon"><ServiceIcon type={s.icon}/></div>
                <h3 className="home-why__name">{s.title}</h3>
                <p className="home-why__desc">{s.desc}</p>
              </div>
            ))}
            <div className="home-why__photo">
              <img src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&w=600" alt="Interior"/>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interior Design ── */}
      <section className="home-interior">
        <div className="container home-interior__inner">
          <div className="home-interior__photos">
            {INTERIOR_IMGS.map((src,i)=>(
              <img key={i} src={src} alt={`Interior ${i+1}`} className="home-interior__img"/>
            ))}
          </div>
          <div className="home-interior__text">
            <h2 className="section-title">We Help You Make<br/>Modern Interior Design</h2>
            <p className="section-sub" style={{marginBottom:"1.2rem"}}>
              At FurniFlow, we help you transform your living spaces into modern, stylish, and functional
              environments. Our carefully selected furniture pieces are designed to meet contemporary trends.
            </p>
            <ul className="home-interior__list">
              <li>✓ Stylish furniture for a beautiful home</li>
              <li>✓ Made with strong and durable materials</li>
              <li>✓ Smart designs to use your space better</li>
              <li>✓ Quick, simple, and hassle-free experience</li>
            </ul>
            <Link to="/shop" className="btn-dark" style={{marginTop:"1.4rem"}}>Explore</Link>
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="home-featured">
        <div className="container">
          <div className="home-featured__products">
            {products.slice(0,3).map(p=>(
              <div key={p.id} className="home-featured__card">
                <div className="home-featured__img-wrap">
                  <img src={p.img} alt={p.name}/>
                </div>
                <h3 className="home-featured__name">{p.name}</h3>
                <p className="home-featured__desc">{p.desc}</p>
                <Link to="/shop" className="home-featured__link">Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <Reviews />

      {/* ── Recent Blog ── */}
      <section className="home-blog">
        <div className="container">
          <div className="home-blog__header">
            <h2 className="section-title">Recent Blog</h2>
            <Link to="/blog" className="home-blog__view">View All Posts</Link>
          </div>
          <div className="home-blog__grid">
            {blogPosts.slice(0,3).map(p=>(
              <div key={p.id} className="home-blog__card">
                <img src={p.img} alt={p.title}/>
                <div className="home-blog__info">
                  <p className="home-blog__title">{p.title}</p>
                  <p className="home-blog__meta">by {p.author} on {p.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
