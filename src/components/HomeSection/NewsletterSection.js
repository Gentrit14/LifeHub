import React, { useState } from "react";
import "./NewsletterSection.scss";
import CustomButton from '../CustomButton'; // ose ku e ke ti
import { FormattedMessage } from "react-intl";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;
    console.log("Subscribed with:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <h2 className="newsletter-title">Stay updated with LifeHub</h2>
        <p className="newsletter-description">
          Be the first to know about new features, events, and community updates.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <CustomButton>
          <FormattedMessage id="News.buttonText" defaultMessage="Subscribe" />
        </CustomButton>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
