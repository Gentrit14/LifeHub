import React from "react";
import HomeSection from "../components/HomeSection/HomeSection";
import MovingText from "../components/MovingText";
import WhyChooseUs from "../components/HomeSection/WhyChooseUs";
import Testimonials from "../components/HomeSection/Testimonials";
import PartnersSection from "../components/HomeSection/PartnersSection";
import VideoSection from "../components/HomeSection/VideoSection";
import CallToActionSection from "../components/HomeSection/CallToActionSection";
import FAQSection from "../components/HomeSection/FAQSection";
import MeetTheTeam from "../components/HomeSection/MeetTheTeam";
import OurJourneySection from "../components/HomeSection/data/OurJourneySection";
import BlogSection from "../components/HomeSection/BlogSection";
import NewsletterSection from "../components/HomeSection/NewsletterSection";
import DownloadAppSection from "../components/HomeSection/DownloadAppSection";
import SocialProofSection from "../components/HomeSection/SocialProofSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <MovingText text=" Join LifeHub today and start your journey towards innovation and success!   Join LifeHub today and start your journey towards innovation and success!" />
      <WhyChooseUs />
      <Testimonials />
      <PartnersSection />
      <VideoSection />
      <CallToActionSection />
      <FAQSection />
      <MeetTheTeam />
      <OurJourneySection />
      <BlogSection />
      <NewsletterSection />
      <DownloadAppSection />
      <SocialProofSection />
    </>
  );
}
