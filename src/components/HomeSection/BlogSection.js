import React from "react";
import "./BlogSection.scss";
import CustomButton from "../CustomButton";
import { FormattedMessage } from "react-intl";

const blogPosts = [
  {
    title: "How LifeHub Empowers the Youth",
    description: "Discover how our platform helps young people unlock their potential and innovate for the future.",
    date: "May 20, 2025",
  },
  {
    title: "10 Ways to Stay Motivated in Tech",
    description: "Explore strategies to stay inspired and productive in your tech journey.",
    date: "May 10, 2025",
  },
  {
    title: "Behind the Scenes: Building LifeHub",
    description: "A sneak peek into the process, challenges, and people behind LifeHub.",
    date: "April 28, 2025",
  }
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest Insights</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <CustomButton>
          <FormattedMessage id="Blog.buttonText" defaultMessage="Read More" />
        </CustomButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
