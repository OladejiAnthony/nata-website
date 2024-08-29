import React from "react";
import "./Latest.scss"
import { FaArrowRightLong } from "react-icons/fa6";
import news1 from "../../assets/images/news1.png"
import news2 from "../../assets/images/news2.png"
import news3 from "../../assets/images/news3.png"
import news4 from "../../assets/images/news4.png"
import news5 from "../../assets/images/news1.png"
import news6 from "../../assets/images/news2.png"
import news7 from "../../assets/images/news3.png"
import news8 from "../../assets/images/news4.png"
import { Link } from "react-router-dom";

const Latest = () => {
  return (
    <div className="latest__section">
      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Latest News</h2>
          <div className="lower_line"></div>
        </div>
        <Link to="/news" className="see__all">
            <h3>See all</h3>
            <FaArrowRightLong color={"#1D4CBF"}size={24} />
        </Link>
      </div>
      <div className="news__card">
        <div className='news'>
          <img src={news1} alt='news1'  />
          <h3>Technicians Training</h3>
          <p>Mr Bashorun held a meeting with our technicians and he spoke about the impact of</p>
          <span>February, 2024</span>
        </div>
        <div className='news'>
          <img src={news2} alt='news2'  />
          <h3>Technicians Training</h3>
          <p>Mr Bashorun held a meeting with our technicians and he spoke about the impact of</p>
          <span>February, 2024</span>
        </div>
        <div className='news'>
          <img src={news3} alt='news3'  />
          <h3>Technicians Training</h3>
          <p>Mr Bashorun held a meeting with our technicians and he spoke about the impact of</p>
          <span>February, 2024</span>
        </div>
        <div className='news'>
          <img src={news4} alt='news4'  />
          <h3>Technicians Training</h3>
          <p>Mr Bashorun held a meeting with our technicians and he spoke about the impact of</p>
          <span>February, 2024</span>
        </div>
        <div className='news'>
          <img src={news5} alt='news5'  />
          <h3>Technicians Training</h3>
          <p>Mr Bashorun held a meeting with our technicians and he spoke about the impact of</p>
          <span>February, 2024</span>
        </div>
        <div className='news'>
          <img src={news6} alt='news6'  />
          <h3>Technicians Training</h3>
          <p>Mr Bashorun held a meeting with our technicians and he spoke about the impact of</p>
          <span>February, 2024</span>
        </div>
        <div className='news'>
          <img src={news7} alt='news7'  />
          <h3>Technicians Training</h3>
          <p>Mr Bashorun held a meeting with our technicians and he spoke about the impact of</p>
          <span>February, 2024</span>
        </div>
        <div className='news'>
          <img src={news8} alt='news8'  />
          <h3>Technicians Training</h3>
          <p>Mr Bashorun held a meeting with our technicians and he spoke about the impact of </p>
          <span>February, 2024</span>
        </div>
      </div>


    </div>
  );
};

export default Latest;
