import React, { useState } from 'react';
import './FAQSection.scss';
import { FaChevronDown } from 'react-icons/fa';
import illustration from '../../assets/img/question.png'; // ndreq path sipas projektit

const faqs = [
  {
    question: "What is LifeHub?",
    answer: "LifeHub is a platform that helps individuals grow through tech education, career support, and real opportunities."
  },
  {
    question: "How do I apply?",
    answer: "Click on the 'Apply Now' button on our website and fill in the form. Our team will contact you shortly."
  },
  {
    question: "Is there any fee to join?",
    answer: "No, joining LifeHub is completely free. We are focused on building opportunities for everyone."
  },
  {
    question: "Who can be part of LifeHub?",
    answer: "Anyone passionate about tech and personal development can join, regardless of background."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <h2 className="faq-title">🤔 Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <FaChevronDown className="icon" />
                </div>
                <div
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease'
                  }}
                >
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-right">
          <img src={illustration} alt="FAQ Illustration" className="faq-image" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
