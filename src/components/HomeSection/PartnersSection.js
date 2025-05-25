import React from "react";
import "./PartnersSection.scss";

import ubtLogo from "../../assets/img/logo1.png";
import ritLogo from "../../assets/img/logo2.png";
import innovemiaLogo from "../../assets/img/logo3.png";
import shkollaDigjitaleLogo from "../../assets/img/logo4.png";
import cacttusLogo from "../../assets/img/logo5.png";
import ictLogo from "../../assets/img/logo6.png";

const partners = [
  { name: "UBT", logo: ubtLogo },
  { name: "RIT Kosovo", logo: ritLogo },
  { name: "Innovemia", logo: innovemiaLogo },
  { name: "Shkolla Digjitale", logo: shkollaDigjitaleLogo },
  { name: "Cacttus", logo: cacttusLogo },
  { name: "Kosovo ICT", logo: ictLogo },
];

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="title">Our Trusted Partners</h2>
        <p className="subtitle">These organizations support our vision for innovation and growth in Kosovo.</p>
        <div className="partners-logos">
          {partners.map((partner, index) => (
            <div className="logo-wrapper" key={index}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
