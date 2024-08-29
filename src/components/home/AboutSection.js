/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./AboutSection.scss"
import abt from "../../assets/images/about-left.png"

const AboutSection = () => {
  return (
    <div className='abt__section'>
      <div className='abt__image'>
        <img src={abt} alt='About Us image' />
      </div>
      <div className='abt__text'>
        <div className='header__box'>
          <div className='upper_line'></div>
          <h2>About Us</h2>
          <div className='lower_line'></div>
        </div>
        <p>
          The Nigerian Automobile Technicians Association (NATA) with over two million members from all over the federation has a history that dates back to 1919. It was officially registered as a registered industrial union on June 2nd, 1962 as the Nigeria Motor Mechanic Association. It was re-registered in 1986 as the Nigeria Motor Mechanics and Technicians Association when the federal government excluded all trade unions of self-employed workers from the registered trade unions. It was re-registered in 1986 by ...
        </p>
        <button>Learn more</button>
      </div>
    </div>
  )
}

export default AboutSection;


