// OurValuesSection.js
import React from "react";
import "./OurValuesSection.scss";

const values = [
  { title: "Innovation", desc: "We embrace change to bring better solutions." },
  { title: "Community", desc: "We grow together by helping each other." },
  { title: "Integrity", desc: "We stay honest and transparent in everything." },
];

const OurValuesSection = () => {
  return (
    <section className="our-values-section">
      <div className="container">
        <h2 className="title">Our Core Values</h2>
        <div className="values-grid">
          {values.map((val, i) => (
            <div key={i} className="value-card">
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
