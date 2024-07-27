/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./App.scss";
import TestiCarousel from "./components/TestiCarousel";
import NewCarousel from "./components/NewCarousel";
import NextCarousel from "./components/NextCarousel";
import testimony1 from "./assets/testimony1.jpg";
import testimony2 from "./assets/testimony2.jpg";
import testimony3 from "./assets/testimony3.jpg";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="App">
      <nav className={navOpen ? "nav-open" : ""}>
        <div className="logo">
          <p>Tiannah's Fragrance</p>
        </div>
        <div className="menu-icon" onClick={toggleNav}>
          ☰
        </div>
        <ul>
          <li>
            <a href="#hero" onClick={toggleNav}>
              Home
            </a>
          </li>
          <li>
            <a href="#products" onClick={toggleNav}>
              Products
            </a>
          </li>
          <li>
            <a href="#benefits" onClick={toggleNav}>
              Benefits
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={toggleNav}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleNav}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section id="hero">
        <h1>Welcome to Tiannah's Fragrance Hub</h1>
        <p>Discover your signature scent</p>
        <button onClick={() => scrollToSection("products")}>Shop Now</button>
      </section>

      <section id="products">
        <TestiCarousel />
      </section>
      <section id="products">
        <NewCarousel />
      </section>
      <section id="products">
        <NextCarousel />
      </section>

      <section id="benefits">
        <h2>Benefits</h2>
        <ul>
          <h3 className="benefitHeader">Diffusers:</h3>
          <li>🌹 Non toxic</li>
          <li>🌹 Eco friendly</li>
          <li>🌹 Alcohol free </li>
          <li>🌹 Super long lasting </li>
          <li>🌹 Has 15 unique Fragrances </li>
          <li>🌹 Infused with essential oils</li>
          <h3 className="benefitHeader">Perfumes:</h3>
          <li>🌹Lasts up to 72 hours, keeping you confident all day long.</li>
          <li>🌹 Gentle on the skin, suitable for daily use.</li>
          <li>🌹 Made from natural ingredients for safety.</li>
          <li>🌹 Elegant packaging, perfect for gifting or personal use.</li>
          <li>
            🌹Super quality, ensuring a long-lasting and intense scent
            experience.
          </li>
        </ul>
      </section>

      <section id="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <img
              src={testimony1}
              alt="Customer Image"
              className="testimonial-image"
            />
            <blockquote>
              <p>"This is the best perfume I've ever used!"</p>
              {/* <cite>- Happy Customer</cite> */}
            </blockquote>
            <p className="testimonial-name">Happy Customer</p>
          </div>
          <div className="testimonial-card">
            <img
              src={testimony2}
              alt="Customer Image"
              className="testimonial-image"
            />
            <blockquote>
              <p>"Amazing scent that lasts all day!"</p>
              {/* <cite>- Satisfied Client</cite> */}
            </blockquote>
            <p className="testimonial-name">Satisfied Client</p>
          </div>
          <div className="testimonial-card">
            <img
              src={testimony3}
              alt="Customer Image"
              className="testimonial-image"
            />
            <blockquote>
              <p>"I get compliments every time I wear it!"</p>
              {/* <cite>- Loyal User</cite> */}
            </blockquote>
            <p className="testimonial-name">Loyal User</p>
          </div>
        </div>
      </section>

      {/* <section id="about">
        <h2>About Us</h2>
        <p>
          We are a boutique perfume brand dedicated to creating unique and
          unforgettable fragrances.
        </p>
      </section> */}

      <section id="contact">
        <div className="contactContainer">
        <h2>Contact</h2>
        <div className="contact-content">
          <form>
            <p className="btnText">
              Click this button to place an order or any of our products via
              Gmail:
            </p>
            <button type="button">
              <a className="gmail" href="mailto:jumokeoladeji4@gmail.com">
                GMail
              </a>
            </button>
          </form>
          <div>
            <p className="btnText">
              Click this button to place an order or any of our products on
              WhatsApp:
            </p>
            <a href="https://wa.me/+2348139780845" className="whatsapp-button">
              Place Order
            </a>
          </div>
        </div>
        </div>
      </section>

      <section id="footer">
        &copy; {year} All Rights Reserved
        <h5 className="tdwonder">Tdwonder Tech</h5>
      </section>
    </div>
  );
}

export default App;
