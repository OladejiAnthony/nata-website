import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logo.png";

// Function to handle active link styles
const activeLink = ({ isActive }) => (isActive ? styles.active : "");

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${navOpen ? styles.open : ""} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles["navbar__logo"]}>
        <NavLink to="/">
          <img src={logo} alt="Nata Logo" />
        </NavLink>
      </div>
      <button className={styles["navbar__toggle"]} onClick={toggleNav}>
        ☰
      </button>
      <ul
        className={`${styles["navbar__links"]} ${
          navOpen ? styles["navbar__links--open"] : ""
        }`}
      >
        <li>
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={activeLink}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={activeLink}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={activeLink}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={activeLink}>
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
