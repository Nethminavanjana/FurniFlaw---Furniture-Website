import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const contactDetails = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6c0 3.375 4.5 10.5 4.5 10.5S13.5 9.375 13.5 6c0-2.485-2.015-4.5-4.5-4.5z"
          stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
        />
        <circle cx="9" cy="6" r="1.5" fill="currentColor" />
      </svg>
    ),
    label: "Address:",
    value: "Colombo, Sri Lanka",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M3 3.5h3l1.5 3.5-1.5 1c.8 1.6 2 2.8 3.5 3.5l1-1.5 3.5 1.5v3C14 15.3 11 16 9 16 5 16 2 13 2 9c0-2 .7-5 1.5-5.5z"
          stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Phone:",
    value: "+94 77 833 1245",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 6.5l7 4.5 7-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    label: "Email:",
    value: "furniflawsupport@gmail.com",
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", subject: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ firstName: "", lastName: "", phone: "", email: "", subject: "" });
  };

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">Contact Us</h1>
            <p className="page-hero__sub">
              We'd love to hear from you! Whether you have a question about our products, need help
              with an order, or want design advice, our team is here to help you anytime.
            </p>
            <ul className="contact-hero__details">
              {contactDetails.map((d) => (
                <li key={d.label} className="contact-hero__detail">
                  <span className="contact-hero__detail-icon">{d.icon}</span>
                  <span>
                    <strong>{d.label}</strong> {d.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="page-hero__img">
            <img
              src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&w=600"
              alt="Sofa"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container contact-form-wrap">
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>
            Need You Any Help?
          </h2>

          {submitted && (
            <div className="contact-form__success">
              ✓ Your message has been sent! We'll get back to you soon.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <input
                className="contact-form__input"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="contact-form__input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <input
              className="contact-form__input"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              className="contact-form__input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              className="contact-form__textarea"
              name="subject"
              placeholder="Subject"
              rows={7}
              value={form.subject}
              onChange={handleChange}
              required
            />

            <div className="contact-form__actions">
              <button
                type="button"
                className="btn-outline-dark"
                onClick={() => setForm({ firstName:"", lastName:"", phone:"", email:"", subject:"" })}
              >
                Cancel
              </button>
              <button type="submit" className="btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Decorative sofa */}
        <div className="contact-sofa">
          <img
            src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&w=700"
            alt="Sofa decoration"
          />
        </div>
      </section>
    </main>
  );
}
