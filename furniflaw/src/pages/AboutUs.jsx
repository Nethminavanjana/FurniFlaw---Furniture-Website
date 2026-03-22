import React from "react";
import { Link } from "react-router-dom";
import { team } from "../data/data";
import Reviews from "../components/Reviews";
import ServiceIcon from "../components/ServiceIcon";
import "./AboutUs.css";

const whyCards = [
  { icon:"shield",   title:"Premium Materials",      desc:"Every piece is crafted with excellent materials, ensuring durability and elegance that lasts for years." },
  { icon:"delivery", title:"Stylish Designs",         desc:"Our furniture blends modern trends with timeless aesthetics, making every space look beautiful and inviting." },
  { icon:"support",  title:"Ultimate Comfort",        desc:"Designed for everyday living, our furniture provides maximum comfort without compromising on style." },
  { icon:"truck",    title:"Hassle-Free Shopping",    desc:"Enjoy a smooth shopping experience with fast delivery, easy returns, and reliable customer support." },
];

export default function AboutUs() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">About Us</h1>
            <p className="page-hero__sub">
              FurniFlow is dedicated to helping you create a home you love. Our collection combines
              modern design, comfort, and durability to bring you furniture that looks good and feels
              great. We aim to make interior design simple, affordable, and enjoyable for everyone.
            </p>
            <div className="page-hero__btns">
              <Link to="/shop" className="btn-primary">Shop Now</Link>
              <Link to="/services" className="btn-outline">Explore</Link>
            </div>
          </div>
          <div className="page-hero__img">
            <img src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&w=600" alt="Sofa"/>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-sub">
            At FurniFlow, we are committed to delivering furniture that perfectly balances quality,
            style, and comfort. Our goal is to help you create a home that reflects your personality.
          </p>
          <div className="about-why__grid">
            {whyCards.map(c=>(
              <div key={c.title} className="about-why__card">
                <div className="about-why__icon"><ServiceIcon type={c.icon}/></div>
                <h3 className="about-why__name">{c.title}</h3>
                <p className="about-why__desc">{c.desc}</p>
              </div>
            ))}
            <div className="about-why__photo">
              <img src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&w=600" alt="Interior"/>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title" style={{textAlign:"center",marginBottom:"2.5rem"}}>Our Team</h2>
          <div className="about-team__grid">
            {team.map(m=>(
              <div key={m.name} className="about-team__card">
                <div className="about-team__img-wrap">
                  <img src={m.img} alt={m.name}/>
                </div>
                <h3 className="about-team__name">{m.name}</h3>
                <p className="about-team__role">{m.role}</p>
                <p className="about-team__desc">{m.desc}</p>
                <button className="about-team__link">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
    </main>
  );
}
