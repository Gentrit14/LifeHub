import React from "react";
import "./OurJourneySection.scss";

const journeyData = [
  {
    year: "2023",
    title: "Ideja fillestare",
    description: "Konceptimi i LifeHub filloi me një ide për të fuqizuar rininë përmes teknologjisë dhe inovacionit."
  },
  {
    year: "2024",
    title: "Krijimi i MVP",
    description: "U zhvillua një version fillestar që shërbeu si bazë për zhvillimin e mëtejshëm të platformës."
  },
  {
    year: "2025",
    title: "+1000 përdorues",
    description: "Platforma arriti 1000 përdorues aktivë duke dëshmuar suksesin dhe nevojën për shtrirje më të gjerë."
  }
];

const OurJourneySection = () => {
  return (
    <section className="journey-section">
      <div className="container">
        <h2 className="section-title">Our Journey</h2>
        <div className="timeline">
          {journeyData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;
