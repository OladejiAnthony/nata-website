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

  const closeNav = () => {
    setNavOpen(false); // Ensure nav closes when a link is clicked
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
        <NavLink to="/" onClick={closeNav}>
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
          <NavLink to="/" className={activeLink} onClick={closeNav}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={activeLink} onClick={closeNav}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={activeLink} onClick={closeNav}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={activeLink} onClick={closeNav}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={activeLink} onClick={closeNav}>
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
