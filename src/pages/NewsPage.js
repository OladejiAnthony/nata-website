import React from "react";
import "../styles/NewsPage.scss";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
import news4 from "../assets/images/news4.png";
import news5 from "../assets/images/news1.png";
import news6 from "../assets/images/news2.png";
import news7 from "../assets/images/news3.png";
import news8 from "../assets/images/news4.png";
import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <div className="news__section">
      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Latest News and Events</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="news__card">
        <Link to="/news-details" className="news">
          <img src={news1} alt="news1" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details" className="news">
          <img src={news2} alt="news2" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details" className="news">
          <img src={news3} alt="news3" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details" className="news">
          <img src={news4} alt="news4" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
      </div>

      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>News and Events</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="news__card">
        <Link to="/news-details" className="news">
          <img src={news1} alt="news1" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details" className="news">
          <img src={news2} alt="news2" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details" className="news">
          <img src={news3} alt="news3" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details" className="news">
          <img src={news4} alt="news4" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details" className="news">
          <img src={news5} alt="news5" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details" className="news">
          <img src={news6} alt="news6" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details" className="news">
          <img src={news7} alt="news7" />
          <h3>Technicians Training</h3>
          <p>
            Mr Bashorun held a meeting with our technicians and he spoke about
            the impact of
          </p>
          <span>February, 2024</span>
        </Link>
        <Link to="/news-details" className="news">
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

export default NewsPage;


