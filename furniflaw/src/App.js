import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/shop"       element={<Shop />} />
        <Route path="/about"      element={<AboutUs />} />
        <Route path="/services"   element={<Services />} />
        <Route path="/blog"       element={<Blog />} />
        <Route path="/contact"    element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
