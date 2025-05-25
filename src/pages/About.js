import React from "react";
import OurMissionSection from "../components/AboutSection/OurMissionSection";
import MovingText from "../components/MovingText";
import MeetTheTeam from "../components/HomeSection/MeetTheTeam";
import OurValuesSection from "../components/AboutSection/OurValuesSection";


export default function About() {
  return (
    <>
      <OurMissionSection />
      
      <MeetTheTeam />
      <OurValuesSection />
      <MovingText text=" Join LifeHub today and start your journey towards innovation and success!   Join LifeHub today and start your journey towards innovation and success!" />
    </>
  );
}
