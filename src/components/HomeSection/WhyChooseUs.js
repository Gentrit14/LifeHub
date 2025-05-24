import React from "react";
import { FaUserTie, FaProjectDiagram, FaGlobeAmericas, FaChartLine } from "react-icons/fa";
import "./WhyChooseUs.scss";

const benefits = [
  {
    icon: <FaUserTie />,
    title: "Personalized Mentoring",
    description: "Guidance tailored just for you to reach your goals.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Real-world Projects",
    description: "Hands-on experience that prepares you for the industry.",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Global Community",
    description: "Connect and collaborate with learners worldwide.",
  },
  {
    icon: <FaChartLine />,
    title: "Proven Results",
    description: "Success stories that showcase our impact.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
