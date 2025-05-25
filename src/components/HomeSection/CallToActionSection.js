import React from 'react';
import './CallToActionSection.scss';
import CustomButton from '../CustomButton'; // ose ku e ke ti
import { FormattedMessage } from "react-intl";

const CallToActionSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">🎯 Ready to transform your future?</h2>
        <p className="cta-subtitle">Let’s get started.</p>
      </div>
              <CustomButton>
          <FormattedMessage id="home.buttonText" defaultMessage="Apply Now" />
        </CustomButton>
    </section>
  );
};

export default CallToActionSection;
