import React from "react";
import "./BlogCard.css";

const BlogCard = ({ title, imageUrl, description, readMoreUrl }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
  };

  return (
    <div className="blog-card" style={cardStyle}>
      <div className="blog-details-container">
        <h2 className="blog-title">{title}</h2>
      </div>
      <div>
        <p className="blog-description">{description}</p>
        <a href={readMoreUrl} className="read-more-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
