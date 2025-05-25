import React from "react";
import Carousel from "react-elastic-carousel";
import "./Testimonials.scss";
import Person1 from "../../assets/img/person1.jpg";
import Person2 from "../../assets/img/person3.jpg";
import Person3 from "../../assets/img/person3.jpg";
import Person4 from "../../assets/img/person3.jpg";
import Person5 from "../../assets/img/person3.jpg";

const testimonials = [
  { name: "Arbër Gashi", role: "Full-Stack Developer", quote: "Shkolla Digjitale më ka ndryshu jetën. Faleminderit për gjithçka!", photo: Person1 },
  { name: "Elira Krasniqi", role: "Designer", quote: "Një eksperiencë që do ta kujtoj gjithmonë me shumë dashuri.", photo: Person2 },
  { name: "Driton Mehmeti", role: "Frontend Developer", quote: "Mësimet janë praktike dhe shumë të dobishme për tregun e punës.", photo: Person3 },
  { name: "Fitore Berisha", role: "QA Engineer", quote: "Kam fituar shumë aftësi të reja dhe vetëbesim!", photo: Person4 },
  { name: "Leotrim Hyseni", role: "Backend Developer", quote: "Inxhinierët këtu janë shumë profesionalë dhe të afërt.", photo: Person5 },
  { name: "Arbër Gashi", role: "Full-Stack Developer", quote: "Shkolla Digjitale më ka ndryshu jetën. Faleminderit për gjithçka!", photo: Person1 },
  { name: "Elira Krasniqi", role: "Designer", quote: "Një eksperiencë që do ta kujtoj gjithmonë me shumë dashuri.", photo: Person2 },
  { name: "Driton Mehmeti", role: "Frontend Developer", quote: "Mësimet janë praktike dhe shumë të dobishme për tregun e punës.", photo: Person3 },
  { name: "Fitore Berisha", role: "QA Engineer", quote: "Kam fituar shumë aftësi të reja dhe vetëbesim!", photo: Person4 },
  { name: "Leotrim Hyseni", role: "Backend Developer", quote: "Inxhinierët këtu janë shumë profesionalë dhe të afërt.", photo: Person5 },
];

const breakPoints = [
  { width: 0, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1024, itemsToShow: 3 },
  { width: 1400, itemsToShow: 4 },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Çka thojnë studentat tanë?</h2>
        <p>Zani i suksesit të vërtetë vjen prej atyne që kanë kaluar rrugën tonë.</p>
      </div>
      <div className="testimonials-carousel">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={4000}
          showArrows={false}
          pagination={false}
          enableMouseSwipe
          infiniteLoop
        >
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-photo">
                <img src={item.photo} alt={item.name} />
              </div>
              <p className="testimonial-quote">"{item.quote}"</p>
              <p className="testimonial-name">{item.name}</p>
              <p className="testimonial-role">{item.role}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
