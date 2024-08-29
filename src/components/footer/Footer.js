// src/components/Footer.js
import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/footer_logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "100px",
        }}
      >
        <div className="footer_left">
          <img src={logo} alt="logo" />
          <div className="icons">
            <FaSquareInstagram />
            <FaFacebookSquare />
            <FaSquareTwitter />
          </div>
        </div>
        <div className="footer_right">
          <div className=""></div>
        </div>
      </div>

      <div className="footer__btm">
        <div className="white_line"></div>
        <div
          className={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <h3>Powered by : Eryeol Inc</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
