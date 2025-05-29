import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Logo from '../assets/img/header-logo.png' // vendos logon tënde

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={Logo} alt="LifeHub Logo" />
          </div>

          <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/feauters">Features</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/community">Community</Link>
          <Link to="/budget">ChatBot</Link>
          </nav>

          <div className="footer-socials">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>

          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LifeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
