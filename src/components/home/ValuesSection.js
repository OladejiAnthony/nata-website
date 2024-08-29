import React from "react";
import "./ValuesSection.scss";

const ValuesSection = () => {
  return (
    <div className="values__section">
      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Our Values</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <ul>
        <li>
          <h3>Ingenuity:</h3>
          <p>
            We are proficiently ingenuous, and this is evident in our service
            delivery.
          </p>
        </li>
        <li>
          <h3>Integrity:</h3>
          <p>
          We are sincere with our panoply of professionals.</p>
        </li>
        <li>
          <h3>Top-notch Services:</h3>
          <p>We ensure a longstanding memorable service of highest quality and
            undaunted level of professionalism, thus encouraging our customers
            to always call back for more of our quality services, with
            referrals.
          </p>
        </li>
        <li>
          <h3>Timely Delivery:</h3>
          <p>We are delineate with our services as we know that time is a
            precious gift given to mankind. We do not waste our clients time;
            whether in consulting, services rendering or delivery.
          </p>
        </li>
        <li>
          <h3>Partnership:</h3>
          <p>We not only work on your vehicle but we treat our clients with
            dignifying respects, as we partner in every ounce of
            friendship and highest.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ValuesSection;
