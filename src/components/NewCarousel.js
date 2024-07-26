import React, { useEffect, useRef, useState } from "react";
import "./NewCarousel.scss";
import TestiSlide from "./TestSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import muslim from "../assets/muslim.jpg"
import black from "../assets/black.jpg"
import ks from "../assets/ks.jpg"
import sugar from "../assets/sugar.jpg" 
import barakkat from "../assets/barakkat.jpg" 
import burj from "../assets/burj.jpg" 

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

const NewCarousel = () => {
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
              name="ARABIAN PERFUME"
              src={muslim}
              //description="We are a one stop technology and innovation agency."
            />
            <TestiSlide
              name="Black Oud"
              price="#2,500"
              src={black}
              description="Black Oud Arabian perfume embodies luxurious woody oriental scents majestically."
            />
            <TestiSlide
              name="KS"
              price="#2,500"
              src={ks}
              description="KS Arabian perfume blends rich exotic spices with woody elegance."
            />
            <TestiSlide
              name="Sugar Baby"
              price="#2,500"
              src={sugar}
              description="Sugar Baby Arabian perfume combines sweet floral notes with warmth."
            />
            <TestiSlide
              name="Bakarrat Rouge"
              price="#2,500"
              src={barakkat}
              description="Bakarrat Rouge Arabian perfume showcases opulent saffron and rose majesty"
            />
            <TestiSlide
              name="Burj Khalifa"
              price="#2,500"
              src={burj}
              description="Burj Khalifa Arabian perfume captures luxurious oud and spice essence."
            />
          </ul>
        </div>
      </main>
    </div>
  );
};

export default NewCarousel;


