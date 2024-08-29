import React from "react";
import "./HeroSection.scss";
import hero from "../../assets/images/hero.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const HeroSection = ({ scrollToSection }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500, // Increased speed for smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slower autoplay for more time on each slide
    arrows: false,
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1.0)", // Even smoother easing function
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        <div className="slide">
          <img src={hero} alt="Hero Background" />
        </div>
        <div className="slide">
          <img src={hero} alt="Hero Background" />
        </div>
        <div className="slide">
          <img src={hero} alt="Hero Background" />
        </div>
        <div className="slide">
          <img src={hero} alt="Hero Background" />
        </div>
      </Slider>

      {/* Fixed overlay content */}
      <div className="overlay">
        <h1>Nigerian Automobile Technician Association (NATA) Lagos</h1>
        <p>Keeping Nigerians Moving On Safe Wheels</p>
        <Link to="/about">
          Learn about us
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
