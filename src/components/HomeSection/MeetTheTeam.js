import React from "react";
import "./MeetTheTeam.scss";
import teamData from "./data/teamData";

const MeetTheTeam = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Meet the Team</h2>
        <p className="team-subtitle">
          Behind every great idea is a passionate team. Get to know the minds driving LifeHub forward.
        </p>

        <div className="team-grid">
          {teamData.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
