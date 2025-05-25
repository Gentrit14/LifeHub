import React from 'react';
import './Community.scss';

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

        {/* Community Values Section */}
        <section className="community-values">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h4>Inclusivity</h4>
              <p>Everyone is welcome. We celebrate diversity and foster a safe space for all voices.</p>
            </div>
            <div className="value-item">
              <h4>Collaboration</h4>
              <p>Working together to create meaningful impact and shared success.</p>
            </div>
            <div className="value-item">
              <h4>Support</h4>
              <p>Providing encouragement and resources to help each other thrive.</p>
            </div>
            <div className="value-item">
              <h4>Growth</h4>
              <p>Empowering members to learn, develop, and reach their full potential.</p>
            </div>
          </div>
        </section>

        {/* Community Activities Section */}
        <section className="community-activities">
          <h2 className="section-title">What We Do Together</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <h3>Monthly Meetups</h3>
              <p>Engage with community members through fun and inspiring local events.</p>
            </div>
            <div className="activity-card">
              <h3>Workshops & Webinars</h3>
              <p>Learn new skills and share knowledge with experts and peers.</p>
            </div>
            <div className="activity-card">
              <h3>Volunteer Projects</h3>
              <p>Make a positive impact by contributing to social and environmental causes.</p>
            </div>
            <div className="activity-card">
              <h3>Online Forums</h3>
              <p>Discuss ideas, ask questions, and support each other in a welcoming space.</p>
            </div>
          </div>
        </section>

        {/* Join Community Section */}
        <section className="community-join">
          <h2 className="join-title">Ready to Join?</h2>
          <p className="join-text">
            Become a part of our community today and start making meaningful connections.
          </p>
          <button className="join-button" onClick={() => alert('Thanks for joining!')}>
            Join Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
