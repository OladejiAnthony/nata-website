// src/pages/ServicesPage.js
import React from 'react';
import Slider from 'react-slick';
import './ServiceCategories.scss';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import service1 from '../../assets/images/automobile.png';
import service2 from '../../assets/images/welder.png';
import service3 from '../../assets/images/panel-beater.png';
import service4 from '../../assets/images/auto-sprayer.png';
import service5 from '../../assets/images/electricians.png';
import service6 from '../../assets/images/brake.png';
import service7 from '../../assets/images/ac.png';
import service8 from '../../assets/images/blacksmith.png';
import service9 from '../../assets/images/upholstery.png';

const services = [
  { image: service1, category: "Auto Mechanics", title: "AUTOMOBILE MECHANICS" },
  { image: service2, category: "Welders", title: "WELDER" },
  { image: service3, category: "Panel Beaters", title: "PANEL BEATING" },
  { image: service4, category: "Auto Sprayers", title: "AUTO SPRAYERS" },
  { image: service5, category: "Auto Electricians", title: "AUTO ELECTRICIANS" },
  { image: service6, category: "Auto Brake Specialists", title: "AUTO BRAKE SPECIALIST" },
  { image: service7, category: "Auto A/C Specialists", title: "AUTO A/C SPECIALIST" },
  { image: service8, category: "Auto Blacksmiths", title: "AUTO BLACKSMITH" },
  { image: service9, category: "Auto Upholstery Specialists", title: "AUTO UPHOLSTERY SPECIALIST" },
];

const ServiceCategories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5, // Show 1.5 services at 480px width
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="services__cat">
      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Service Categories</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <Slider {...settings} className="services__carousel">
        {services.map((service, index) => (
          <div key={index} className="service__image">
            <Link
              to={`/services/${service.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="service__link"
            >
              <img src={service.image} alt={service.category} />
              <h3>{service.title}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCategories;
