import React from "react";
import { FormattedMessage } from "react-intl";
import CustomButton from "../CustomButton";
import "./HomeSection.scss";





const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="hero-content">
        <h1>
          <FormattedMessage
            id="home.heroTitle"
            defaultMessage="Empowering the Next Generation Through Technology and Innovation"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home.heroDescription"
            defaultMessage="Welcome to LifeHub – a platform built with purpose, passion, and people in mind. Whether you're here to learn, grow, or connect, LifeHub provides the tools and opportunities that help you unlock your full potential. Join a digital experience where ideas come to life and futures are shaped through creativity, technology, and community."
          />
        </p>
        <CustomButton>
          <FormattedMessage id="home.buttonText" defaultMessage="Start Your Journey Today" />
        </CustomButton>
      </div>
      <div className="achievements">
        <div className="stat">
          <h2>400+</h2>
          <p>
            <FormattedMessage
              id="home.statStudents"
              defaultMessage="Students admitted to top universities"
            />
          </p>
        </div>
        <div className="stat">
          <h2>100%</h2>
          <p>
            <FormattedMessage
              id="home.statScholarship"
              defaultMessage="Scholarship success rate"
            />
          </p>
        </div>
        <div className="stat">
          <h2>27</h2>
          <p>
            <FormattedMessage
              id="home.statCountries"
              defaultMessage="Countries with LifeHub students"
            />
          </p>
        </div>
        <div className="stat">
          <h2>30,000+</h2>
          <p>
            <FormattedMessage
              id="home.statCommunity"
              defaultMessage="A vibrant student community"
            />
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default HomeSection;
