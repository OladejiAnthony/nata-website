import React from "react";
import "./NewsDetails.scss";
import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";
import news3 from "../../assets/images/news3.png";
import news4 from "../../assets/images/news4.png";
import news5 from "../../assets/images/news1.png";
import news6 from "../../assets/images/news2.png";
import news7 from "../../assets/images/news3.png";
import news8 from "../../assets/images/news4.png";
import { Link } from "react-router-dom";

const NewsDetails = () => {
  return (
    <div className="news__details">
      <div className="technician-training-card">
        <img
          src={news1}
          alt="Technicians Training"
          className="training-image"
        />
        <div className="training-content">
          <h2>Technicians Training</h2>
          <p className="training-date">February, 2024</p>
          <p>
            The Nigerian Automobile Technicians Association (NATA) is a national
            professional body of the micro, small, and medium scale
            auto-repairers in the informal economy. Members include artisans
            without formal schooling and technicians with average formal
            education and belong to such trade groups like vulcanizing,
            auto-electrical repair, panel fixing, auto body building, motor
            engine repairing and servicing, and auto trimming and body
            refinishing.
          </p>
          <p>
            The Nigerian Automobile Technicians Association (NATA) with over two
            million members from all over the federation has a history that
            dates back to 1919. It was officially registered as a trade union in
            June 2nd, 1962 as Nigeria Motor Mechanic Association, it was
            re-registered in 1986 as Nigeria Motor Mechanics and Technicians
            Association when the federal government excluded all trade unions of
            self-employed workers from the registered trade unions. It was
            re-registered in 1986 by the ministry of internal affairs. NATA has
            more men membership than women, about 5% of the population are women
            and they are in few states like Lagos, Anambra, Oyo, Rivers, Abuja
            and Edo state.
          </p>
        </div>
      </div>

      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Other News</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="news__card">
        <Link to="/news-details"  className="news">
          <img src={news1} alt="news1" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details"  className="news">
          <img src={news2} alt="news2" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details"  className="news">
          <img src={news3} alt="news3" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details"  className="news">
          <img src={news4} alt="news4" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details"  className="news">
          <img src={news5} alt="news5" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details"  className="news">
          <img src={news6} alt="news6" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details"  className="news">
          <img src={news7} alt="news7" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details"  className="news">
          <img src={news8} alt="news8" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of{" "}
          </p>
          <span>February, 2024</span>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails;


