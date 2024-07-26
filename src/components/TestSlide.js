import React from "react";

const TestiSlide = ({ description, src, name, price }) => {
  return (
    <li>
      <div className="top">
        <a
          href="https://wa.me/+2348139780845"
          className={{ textDecoration: "none" }}
        >
          <img className="image" src={src} alt="pics" />
        </a>
      </div>
      <div className="bottom">
        <div>
          <h5 className="name">{name}</h5>
          <p>{price}</p>
        </div>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default TestiSlide;
