import React, { useEffect, useRef, useState } from "react";
import "./NextCarousel.scss";
import TestiSlide from "./TestSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import jimmy from "../assets/jimmy.jpg";
import creed from "../assets/creed.jpg";
import baccarat from "../assets/baccarat.jpg";
import dior from "../assets/dior.jpg";
import kayalli from "../assets/kayalli.jpg";
import men from "../assets/men.jpg";
import paco from "../assets/paco.jpg";
import santal from "../assets/santal.jpg";
import rabbane from "../assets/rabanne.jpg";
import Thirty from "../assets/30ml.jpg"
import van from "../assets/van.jpg"

const Buttons = ({ label, fontIcon, ariaButton, onEvent }) => {
  return (
    <div className="button-section">
      <button
        onClick={onEvent}
        className={label}
        aria-pressed={ariaButton}
        type="button"
      >
        {fontIcon}
        {label}
      </button>
    </div>
  );
};

const NextCarousel = () => {
  const [touched, setTouched] = useState("");
  const galleryRef = useRef();
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 435);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //button hooks
  const [ariaPressed, setAriaPressed] = useState(false);
  const [faIconNext, setFaIconNext] = useState(
    <FontAwesomeIcon icon={faArrowRight} />
  );
  const [faIconPrev, setFaIconPrev] = useState(
    <FontAwesomeIcon icon={faArrowLeft} />
  );

  const onMainTouchStart = () => {
    setTouched("touched");
  };
  //scrollnext
  const scrollNext = () => {
    galleryRef.current.scrollBy({
      top: 0,
      left: isPhone ? 290 : 540,
      behavior: "smooth",
    });
  };
  //scrollprev
  const scrollPrev = () => {
    galleryRef.current.scrollBy({
      top: 0,
      left: isPhone ? -290 : -540,
      behavior: "smooth",
    });
  };
  //next click
  const onButtonNextClick = () => {
    scrollNext();
    if (ariaPressed === false) {
      setAriaPressed(true);
      setFaIconNext(<FontAwesomeIcon icon={faArrowRight} />);
      setTimeout(() => {
        setAriaPressed(false);
        setFaIconNext(<FontAwesomeIcon icon={faArrowRight} />);
      }, 600);
      console.log("button clicked");
    } else {
      setAriaPressed(false);
      setFaIconNext(<FontAwesomeIcon icon={faArrowRight} />);
    }
  };
  //prev click
  const onButtonPrevClick = () => {
    scrollPrev();
    if (ariaPressed === false) {
      setAriaPressed(true);
      setFaIconPrev(<FontAwesomeIcon icon={faArrowLeft} />);
      setTimeout(() => {
        setAriaPressed(false);
        setFaIconPrev(<FontAwesomeIcon icon={faArrowLeft} />);
      }, 600);
      console.log("button clicked");
    } else {
      setAriaPressed(false);
      setFaIconPrev(<FontAwesomeIcon icon={faArrowLeft} />);
    }
  };

  return (
    <div className="testi-carousel-wrapper">
      <main onTouchStart={onMainTouchStart} className={`carousel ${touched}`}>
        <ul aria-label="gallery controls">
          <li>
            <Buttons
              ariaButton={ariaPressed}
              onEvent={onButtonPrevClick}
              fontIcon={faIconPrev}
            />
          </li>
          <li>
            <Buttons
              ariaButton={ariaPressed}
              onEvent={onButtonNextClick}
              fontIcon={faIconNext}
            />
          </li>
        </ul>
        <div
          ref={galleryRef}
          role="region"
          aria-labelledby="gallery-label"
          tabIndex="0"
          aria-describedby="focus"
        >
          <ul>
          <TestiSlide
              name="Designer Perfume Oil 6ml Collections"
              src={Thirty}
              price="9000 each"
              //description="30ml - #9000, 15ml - #7000, 6ml - #2500"
            />
            <TestiSlide
              name="Designer Perfume Oil 15ml Collections"
              price="#7000 each"
              src={cat2}
              //description="30ml - #9000, 15ml - #7000, 6ml - #2500"
            />
            <TestiSlide
              name="Designer Perfume Oil 6ml Collections"
              src={cat1}
              price="2500 each"
              //description="30ml - #9000, 15ml - #7000, 6ml - #2500"
            />
            <TestiSlide
              name="Designer Jimmy Choo 30ml"
              price="#9000"
              src={jimmy}
              description="Jimmy Choo's perfume oil exudes sophisticated elegance and sensual glamour."
            />
            <TestiSlide
              name="Designer Creed Aventus Men 30ml"
              price="#9000"
              src={creed}
              description="Creed Aventus Men perfume oil exudes sophisticated fruity woody charm."
            />
            <TestiSlide
              name="Designer Baccarat Rouge 540 30ml"
              price="#9000"
              src={baccarat}
              description="This perfume oil embodies luxurious saffron amber warmth"
            />
            <TestiSlide
              name="Designer Kayalli Vanilla28 30ml"
              price="#9000"
              src={van}
              description="Kayali Vanilla 28 perfume oil wraps you in creamy sweetness."
            />
            <TestiSlide
              name="Designer Dior Sauvage 30ml"
              price="#9000"
              src={dior}
              description="Dior Sauvage perfume oil unleashes fresh energetic bergamot woody sensuality."
            />
            <TestiSlide
              name="Designer Paco Rabanne 1Million 30ml"
              price="#9000"
              src={paco}
              description="Paco Rabanne 1 Million perfume oil exudes luxurious gold seduction."
            />
            <TestiSlide
              name="Designer Kayalli Vanilla28 15ml"
              price="#7000"
              src={kayalli}
              description="Kayali Vanilla 28 perfume oil wraps you in creamy sweetness."
            />
            <TestiSlide
              name="Designer 212 Men 15ml"
              price="#7000"
              src={men}
              description="212 Men perfume oil blends sophisticated citrus with woody masculinity "
            />
            
            <TestiSlide
              name="Designer Santal 33 Lelabo 15ml"
              price="#7000"
              src={santal}
              description="This perfume oil embodies smooth woody sophistication."
            />
            <TestiSlide
              name="Designer Paco Rabanne 1Million 15ml"
              price="#7000"
              src={rabbane}
              description="Paco Rabanne 1 Million perfume oil showcases sexy leather charm"
            />
          </ul>
        </div>
      </main>
    </div>
  );
};

export default NextCarousel;
