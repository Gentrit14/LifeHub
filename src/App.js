import React from "react";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import MovingText from "./components/MovingText";
import WhyChooseUs from "./components/HomeSection/WhyChooseUs";
import Testimonials from "./components/HomeSection/Testimonials"
// import PartnersSection from "./components/HomeSection/PartnersSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HomeSection />
        <MovingText text=" Join LifeHub today and start your journey towards innovation and success!   Join LifeHub today and start your journey towards innovation and success!" />
        {/* <PartnersSection /> */}
        <WhyChooseUs />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
