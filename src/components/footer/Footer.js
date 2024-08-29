// src/components/Footer.js
import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/footer_logo.png";
import fac from "../../assets/images/logos_facebook.png";
import twit from "../../assets/images/skill-icons_twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_left">
          <img src={logo} alt="logo" />
          <div className="icons">
            <img src={twit} alt="twitter" />
            <img src={fac} alt="facebook" />
          </div>
        </div>
        <div className="footer_right">
          <div className="col">
            <h3>About Us</h3>
            <Link>Contact Us</Link>
            <Link>Core values</Link>
            <Link>Mission & Vision</Link>
          </div>
          <div className="col">
            <h3>Services</h3>
            <Link>Mechanics</Link>
            <Link>Panel beater</Link>
            <Link>Auto Sprayers</Link>
            <Link>Battery Chargers</Link>
            <Link>Auto Black smiths</Link>
            <Link>Other services</Link>
          </div>
          <div className="col">
            <h3>News & Events</h3>
            <Link>FAQs</Link>
            <Link>News</Link>
          </div>
        </div>
      </div>

      <div className="footer__btm">
        <div className="white_line"></div>
        <div className="textContainer">
          <h3>Powered by : Eryeol Inc</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
