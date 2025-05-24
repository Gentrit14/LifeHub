import React from "react";
import Carousel from "react-elastic-carousel";
import "./Testimonials.scss";
import Person1 from '../../assets/img/person1.jpg'
import Person2 from '../../assets/img/person3.jpg'
import Person3 from '../../assets/img/person3.jpg'

const testimonials = [
  {
    name: "Ardita Berisha",
    role: "Student",
    photo: Person1, // vendos foton tënde këtu
    quote: "Programi më ndihmoi të zhvillohem profesionalisht dhe të gjej punën e ëndrrave.",
  },
  {
    name: "Besart Gashi",
    role: "Developer",
    photo: Person2,
    quote: "Mësova gjëra praktike që nuk i kam marrë askund tjetër.",
  },
  {
    name: "Elira Hoxha",
    role: "Entrepreneur",
    photo: Person3,
    quote: "Shërbimi ishte shumë mbështetës dhe profesional.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>Success Stories</h2>
      <p>Real feedback from our users that inspires trust and confidence.</p>

      <Carousel itemsToShow={1} pagination={true} enableAutoPlay autoPlaySpeed={5000} showArrows={false}>
        {testimonials.map(({ name, role, photo, quote }, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-photo">
              <img src={photo} alt={`${name} photo`} />
            </div>
            <p className="testimonial-quote">"{quote}"</p>
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-role">{role}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
