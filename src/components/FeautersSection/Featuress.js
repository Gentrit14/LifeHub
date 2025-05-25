// FeaturesPage.js
import React from "react";
import "./Featuress.scss";
import CustomButton from "../../components/CustomButton";
import Mockup from "../../assets/img/Mockup3.jpg";

const FeaturesPage = () => {
  return (
    <div className="features-page">
      {/* 1. Hero Section */}
      <section className="features-hero">
        <div className="container">
          <h1 className="title">Powerful Features to Elevate Your Journey</h1>
          <p className="subtitle">
            Discover how LifeHub transforms your lifestyle, productivity, and well-being.
          </p>
        </div>
      </section>

      {/* 2. Core Features Section */}
      <section className="core-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <h3>Smart Daily Planner</h3>
              <p>Organize your tasks and life goals effortlessly.</p>
            </div>
            <div className="feature-card">
              <h3>Wellness Tracking</h3>
              <p>Track your mental & physical wellness in real-time.</p>
            </div>
            <div className="feature-card">
              <h3>Integrated Calendar</h3>
              <p>Sync with all your apps and stay on top of events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Feature Highlight Section */}
      <section className="feature-highlight">
        <div className="container highlight-content">
          <div className="text-side">
            <h2>Everything You Need, in One Place</h2>
            <p>
              LifeHub combines organization, motivation, and well-being into a single intuitive platform.
            </p>
          </div>
          <div className="image-side">
            <img src={Mockup} alt="App Visual" />
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose LifeHub?</h2>
          <ul className="benefits-list">
            <li> Personalized experience for your goals</li>
            <li> Easy to use and beautifully designed</li>
            <li> Secure and cloud-synced data</li>
          </ul>
        </div>
      </section>

      {/* 5. Testimonial Snippet */}
      <section className="testimonial-snippet">
        <div className="container">
          <blockquote>
            “LifeHub is the only app that truly understands my lifestyle and keeps me motivated.”
            <footer>— Real User, App Store Review</footer>
          </blockquote>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="features-cta">
        <div className="container">
          <h2>Ready to experience the change?</h2>
          <CustomButton>Get Started with LifeHub</CustomButton>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
