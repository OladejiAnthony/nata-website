// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import "./styles/App.scss";
import Footer from "./components/footer/Footer";
import ServicesPage from "./pages/ServicesPage";
import Faq from "./pages/Faq";
import ScrollToTop from "./ScrollToTop";

import ServicesDetails from "./components/services/ServicesDetails";
import NewsDetails from "./components/news/NewsDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:category" element={<ServicesDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news-details" element={<NewsDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;


