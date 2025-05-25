import React from "react";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import MovingText from "./components/MovingText";
import WhyChooseUs from "./components/HomeSection/WhyChooseUs";
import Testimonials from "./components/HomeSection/Testimonials"
import VideoSection from "./components/HomeSection/VideoSection"
import CallToActionSection from "./components/HomeSection/CallToActionSection";
import FAQSection from "./components/HomeSection/FAQSection";
import PartnersSection from "./components/HomeSection/PartnersSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HomeSection />
        <MovingText text=" Join LifeHub today and start your journey towards innovation and success!   Join LifeHub today and start your journey towards innovation and success!" />
        
        <WhyChooseUs />
        <Testimonials />
        <PartnersSection />
        <VideoSection />
        <CallToActionSection />
        <FAQSection />
      </main>
    </div>
  );
}

export default App;
