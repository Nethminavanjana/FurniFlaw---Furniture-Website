import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/data";
import Reviews from "../components/Reviews";
import "./Blog.css";

const PAGE_SIZE = 9;

export default function Blog() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = blogPosts.slice(0, visible);

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">Our Blog</h1>
            <p className="page-hero__sub">
              Get the latest furniture trends and home design ideas.
              Stay updated with the latest furniture trends and modern home design ideas.
              Get simple tips and inspiration to create a stylish and comfortable living space.
            </p>
            <div className="page-hero__btns">
              <Link to="/shop" className="btn-primary">Shop Now</Link>
              <Link to="/about" className="btn-outline">Explore</Link>
            </div>
          </div>
          <div className="page-hero__img">
            <img
              src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&w=600"
              alt="Sofa"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-section">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "1.8rem" }}>Recent Blog</h2>

          <div className="blog-grid">
            {shown.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-card__img-wrap">
                  <img src={post.img} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card__body">
                  <p className="blog-card__title">{post.title}</p>
                  <p className="blog-card__meta">
                    by {post.author} on {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {visible < blogPosts.length && (
            <div className="blog-more">
              <button
                className="blog-more__btn"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                aria-label="Load more posts"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M7 10l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Reviews */}
      <Reviews />
    </main>
  );
}
