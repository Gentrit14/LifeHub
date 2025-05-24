import React from "react";
import CustomButton from "./CustomButton";
import "./Header.scss"; // përdorim të njëjtin CSS

export default function MobileMenu({ isOpen, toggleMenu }) {
  const handleLanguageToggle = (e) => {
    const selectedLang = e.target.checked ? "en" : "sq";
    console.log("Language selected:", selectedLang);
  };

  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#programs" onClick={toggleMenu}>Programs</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
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


