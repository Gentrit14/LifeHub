import React from "react";
import "./DownloadAppSection.scss";
import CustomButton from '../CustomButton'; // ose ku e ke ti
import { FormattedMessage } from "react-intl";
import PhoneMockup from "../../assets/img/Mockup2.jpg"; // vendos imazhin tënd këtu

const DownloadAppSection = () => {
  return (
    <section className="download-app-section">
      <div className="container">
        <div className="text-content">
          <h2 className="title">Experience LifeHub Anywhere</h2>
          <p className="subtitle">
            Download our app and stay connected with your journey, wherever you are.
          </p>
          <div className="buttons">
            <CustomButton>
          <FormattedMessage id="App.buttonText" defaultMessage="Download on IOS" />
        </CustomButton>
            <CustomButton>
          <FormattedMessage id="App.buttonText" defaultMessage="Download on Andrioid" />
        </CustomButton>
          </div>
        </div>

        <div className="image-content">
          <img src={PhoneMockup} alt="App Mockup" className="mockup" />
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
