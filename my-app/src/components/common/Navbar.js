import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [width, setWidth] = useState(null);
  // let width = window.innerWidth;
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);
  function toggleMobileMenu(e) {
    setIsMobileMenuOpen((prevState) => {
      return !prevState;
    });
  }
  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <span>Q</span>UARKS
        </h2>
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          <img
            className="hamburger-iconImg"
            src="/hamburger.svg"
            alt="hamburger icon"
          />
        </div>
      </div>

      <div
        style={{ display: width > 625 || isMobileMenuOpen ? "block" : "none" }}
        className="menu-link"
      >
        <ul>
          <li onClick={toggleMobileMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/blogs"> Blogs </Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/create"> Create Post </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
