import React from 'react';
import './Contact.scss';
import CustomButton from "../../components/CustomButton";
import { FormattedMessage } from "react-intl";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We’d love to hear from you. Reach out with any questions, ideas, or opportunities.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> Rr. Bulevardi Bill Clinton, Prishtina, Kosovo</p>
          <p><strong>Email:</strong> info@yourdomain.com</p>
          <p><strong>Phone:</strong> +383 44 123 456</p>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Write your message..." rows="6" required />
            </div>
                      <CustomButton >
          <FormattedMessage id="comunity.buttonText" defaultMessage="Send Message" />
        </CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
