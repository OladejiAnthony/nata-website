import React, { useEffect, useRef, useState } from "react";
import "./TestiCarousel.scss";
import TestiSlide from "./TestSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import english from "../assets/English-Lavender.jpg";
import chocolate from "../assets/chocolate-cookies.jpg";
import fresh from "../assets/fresh-dew.jpg";
import fruitful from "../assets/fruity-cocktail.jpg";
import lemon from "../assets/lemongrass-tea.jpg";
import hero from "../assets/tin.jpg";
import spa from "../assets/spa-treats.jpg";
import loli from "../assets/loli-pops.jpg";

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

const TestiCarousel = () => {
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
              name="CAR DIFFUSERS"
              src={hero}
              description="1 Bottle - #3000, 2 Bottles - #5000"
            />
            <TestiSlide
              name="English Lavender"
              price="#3000"
              src={english}
              description=" This car diffusers has a floral, sweet scent that gives your car a beautiful ambience"
            />
            <TestiSlide
              name="Chocolate Cookies"
              price="#3000"
              src={chocolate}
              description="A strong, Gourmand scent that gives your car that edible ambience."
            />
            <TestiSlide
              name="Fresh Dew"
              price="#3000"
              src={fresh}
              description="A clean earth scent that reminds you of wet sands after a heavy. It gives your car a sophisticated aura."
            />
            <TestiSlide
              name="Fruity Cocktails"
              price="#3000"
              src={fruitful}
              description="A blend of various exotic fruits in one, giving your car that sweet, fruity and sizzling scents"
            />
            <TestiSlide
              name="Lemon Grass Tea"
              price="#3000"
              src={lemon}
              description="Brewed fresh lemongrass with honey added to it. Gives you the relaxing yet exciting ambience."
            />
            <TestiSlide
              name="Spa Treats"
              price="#3000"
              src={spa}
              description="Infused with Chamomile, this car diffuser provides a relaxing atmosphere while you drive."
            />
            <TestiSlide
              name="Loli Pops"
              price="#3000"
              src={loli}
              description="Loli Pop car diffuser freshens air with colorful sweet fragrance."
            />
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TestiCarousel;
