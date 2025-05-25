import React from "react";
import "./VideoSection.scss";
import Video from '../../assets/videos/working2.mp4'

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-overlay">
        <h2 className="video-title">See how LifeHub works</h2>
        <p className="video-subtitle">Real people. Real impact. Real stories.</p>
      </div>
      <video className="background-video" autoPlay muted loop playsInline>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;
