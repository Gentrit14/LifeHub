import React, { useState, useEffect } from "react";
import "./Header.scss";
import MobileMenu from "./MobileMenu";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import Logo1 from '../assets/img/header-logo.png'


export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  // Efekti që mbyll mobile menu në resize në desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup kur component hiqet
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileOpen]);

  const handleLanguageToggle = (e) => {
    const selectedLang = e.target.checked ? "en" : "sq";
    console.log("Language selected:", selectedLang);
  };

  return (
    <header className="main-header">
      <div className="logo"><img src={Logo1} alt="logo" /></div>

      <nav className="nav-center desktop-menu">
        <ul className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/feauters">Features</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/community">Community</Link>
          <Link to="/budget">Download App</Link>

        </ul>
      </nav>

      <div className="header-right">
        <label className="switch">
          <input type="checkbox" onChange={handleLanguageToggle} />
          <span className="slider"></span>
        </label>

        <CustomButton onClick={() => console.log("Contact clicked")}>
          Contact
        </CustomButton>

        <div className="hamburger" onClick={toggleMobileMenu}>
          <span />
          <span />
          <span />
        </div>
      </div>

      <MobileMenu isOpen={isMobileOpen} toggleMenu={toggleMobileMenu} />
    </header>
  );
}
