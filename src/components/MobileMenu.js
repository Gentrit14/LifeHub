import React from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import "./Header.scss"; // përdorim të njëjtin CSS

export default function MobileMenu({ isOpen, toggleMenu }) {
  const handleLanguageToggle = (e) => {
    const selectedLang = e.target.checked ? "en" : "sq";
    console.log("Language selected:", selectedLang);
  };

  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About Us</Link>
          </li>
          <li>
            <Link to="/feauters" onClick={toggleMenu}>Features</Link>
          </li>
          <li>
            <Link to="/programs" onClick={toggleMenu}>Programs</Link>
          </li>
          <li>
            <Link to="/community" onClick={toggleMenu}>Community</Link>
          </li>
          <li>
            <Link to="/download" onClick={toggleMenu}>Download App</Link>
          </li>

      </ul>

      {/* Language Toggle in Mobile */}
      <div style={{ marginTop: "1rem" }}>
        <label className="switch">
          <input type="checkbox" onChange={handleLanguageToggle} />
          <span className="slider"></span>
        </label>
      </div>

      {/* Contact Button in Mobile */}
      <div style={{ marginTop: "1rem" }}>
        <CustomButton onClick={() => console.log("Contact clicked")}>
          Contact
        </CustomButton>
      </div>
    </div>
  );
}


