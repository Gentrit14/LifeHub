import React from "react";
import "./SocialProofSection.scss";
import { FormattedMessage } from "react-intl";

// Placeholder logos – vendosi realet më vonë
import Media1 from "../../assets/img/llogo1.png";
import Media2 from "../../assets/img/llogo2.png";
import Media3 from "../../assets/img/llogo3.png";

const SocialProofSection = () => {
  return (
    <section className="social-proof-section">
      <div className="container">
        <h2 className="title">
          <FormattedMessage id="SocialProof.title" defaultMessage="Trusted by media & professionals" />
        </h2>

        <div className="media-logos">
          <img src={Media1} alt="Telegrafi" />
          <img src={Media2} alt="RTV21" />
          <img src={Media3} alt="KosovaPress" />
        </div>

        <div className="quote-card">
          <p className="quote">
            <FormattedMessage
              id="SocialProof.quote"
              defaultMessage="“LifeHub is transforming the way people connect with wellness and productivity.”"
            />
          </p>
          <span className="author">— Tech Influencer Weekly</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
