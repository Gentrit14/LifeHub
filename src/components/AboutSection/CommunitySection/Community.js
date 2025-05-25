import React from 'react';
import './Community.scss';
import CustomButton from "../../../components/CustomButton";
import { FormattedMessage } from "react-intl";


const CommunityPage = () => {
  return (
    <div className="community-page">
      <div className="container">
        {/* Hero Section */}
        <section className="community-hero">
          <h1 className="hero-title">Join Our Vibrant Community</h1>
          <p className="hero-subtitle">
            Connect, share, and grow with like-minded people passionate about making a difference.
          </p>
        </section>

        {/* Values Section */}
        <section className="community-values">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-list">
            {[
              {
                title: "Inclusivity",
                desc: "Everyone is welcome. We celebrate diversity and foster a safe space for all voices.",
              },
              {
                title: "Collaboration",
                desc: "Working together to create meaningful impact and shared success.",
              },
              {
                title: "Support",
                desc: "Providing encouragement and resources to help each other thrive.",
              },
              {
                title: "Growth",
                desc: "Empowering members to learn, develop, and reach their full potential.",
              },
            ].map((value, idx) => (
              <div className="value-item" key={idx}>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="community-activities">
          <h2 className="section-title">What We Do Together</h2>
          <div className="activities-grid">
            {[
              {
                title: "Monthly Meetups",
                desc: "Engage with community members through fun and inspiring local events.",
              },
              {
                title: "Workshops & Webinars",
                desc: "Learn new skills and share knowledge with experts and peers.",
              },
              {
                title: "Volunteer Projects",
                desc: "Make a positive impact by contributing to social and environmental causes.",
              },
              {
                title: "Online Forums",
                desc: "Discuss ideas, ask questions, and support each other in a welcoming space.",
              },
            ].map((act, idx) => (
              <div className="activity-card" key={idx}>
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Section */}
        <section className="community-join">
          <h2 className="join-title">Ready to Join?</h2>
          <p className="join-text">
            Become a part of our community today and start making meaningful connections.
          </p>
          <CustomButton onClick={() => alert('Thanks for joining!')}>
          <FormattedMessage id="comunity.buttonText" defaultMessage="Join Now" />
        </CustomButton>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
