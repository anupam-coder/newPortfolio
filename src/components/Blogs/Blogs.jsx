import React from "react";
import Header from "../Header/Header";
import { blogsData } from "../../assets/blogsData";
import BlogCard from "./BlogCard";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div id="blogs" className="section-container-blogs">
      <Header
        className="header-component"
        heading="My Blogs."
        details="Here are few collection of blogs covering a range of subjects, from technical topics to a variety of random subjects."
      />

      <div className="blogs-grid">
        {blogsData.map(({ blogName, blogDescription, imageUrl, blogUrl }) => (
          <BlogCard
            key={blogName}
            title={blogName}
            description={blogDescription}
            readMoreUrl={blogUrl}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
