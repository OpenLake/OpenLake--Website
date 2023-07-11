import React, { useState } from 'react';
import "./css/Navbar.css";
import { logonav } from "../assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar z-50">
      <div className="navbar__left">
        <a href="/" className="navbar__logo">
          <img src={logonav} alt ="logonav" />
        </a>
        <span className="navbar__company-name">Open Lake</span>
      </div>
      <div className="navbar__right">
        <div className={`navbar__menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="/projects" className="navbar__link">Projects</a>
          <a href="/community" className="navbar__link">Community</a>
          <a href="/past-community" className="navbar__link">Past Community</a>
          <a href="/events" className="navbar__link">Events</a>
          <button className="navbar__button">BLOGS</button>
        </div>
        <div className="navbar__mobile-menu" onClick={toggleMobileMenu}>
          <div className={`navbar__hamburger ${isMobileMenuOpen ? 'open' : ''}`} />
          <div className={'ham_bar'}></div>
          <div className={'ham_bar'}></div>
          <div className={'ham_bar'}></div>
          <div className={'ham_bar'}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
