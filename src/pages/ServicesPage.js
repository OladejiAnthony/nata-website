import React from "react";
import "../styles/ServicesPage.scss";
import service1 from "../assets/images/automobile.png";
import service2 from "../assets/images/welder.png";
import service3 from "../assets/images/panel-beater.png";
import service4 from "../assets/images/auto-sprayer.png";
import service5 from "../assets/images/electricians.png";
import service6 from "../assets/images/brake.png";
import service7 from "../assets/images/ac.png";
import service8 from "../assets/images/blacksmith.png";
import service9 from "../assets/images/upholstery.png";

const ServicesPage = () => {
  return (
    <div className="services__Page">
      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>List of Services</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="services__images">
        <div className="service_image">
          <img src={service1} alt="service1" />
          <h3>AUTOMOBILE MECHANICS</h3>
        </div>
        <div className="service_image">
          <img src={service2} alt="service2" />
          <h3>WELDER</h3>
        </div>
        <div className="service_image">
          <img src={service3} alt="service3" />
          <h3>PANEL BEATING</h3>
        </div>
        <div className="service_image">
          <img src={service4} alt="service4" />
          <h3>AUTO SPRAYERS</h3>
        </div>
        <div className="service_image">
          <img src={service5} alt="service5" />
          <h3>AUTO ELECTRICIANS</h3>
        </div>
        <div className="service_image">
          <img src={service6} alt="service6" />
          <h3>AUTO BRAKE SPECIALIST</h3>
        </div>
        <div className="service_image">
          <img src={service9} alt="service9" />
          <h3>AUTO UPHOLSTERY SPECIALIST</h3>
        </div>
        <div className="service_image">
          <img src={service7} alt="service7" />
          <h3>AUTO A/C SPECIALIST</h3>
        </div>
        <div className="service_image">
          <img src={service8} alt="service8" />
          <h3>AUTO BLACKSMITH</h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

