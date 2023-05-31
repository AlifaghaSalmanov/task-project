import React, { useEffect } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [headerbg, setHeader] = useState("headerbg");

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeader("headerbg");
    } else if (window.scrollY > 70) {
      return setHeader("headerbg2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <header className={headerbg}>
      <nav ref={navRef}>
        <Link to="/">Əsas Səhifə</Link>
        <Link to="/trainings">Təlimlər</Link>
        <Link to="/trainers">Təlimçilər</Link>
        <Link to="/about">Haqqında</Link>
        <Link to="/contact">Əlaqə</Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
