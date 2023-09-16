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

      <div className="project-cards-container">
        {blogsData.map(({ blogName, blogDescription, imageUrl, blogUrl }) => {
          return (
            <BlogCard
              title={blogName}
              description={blogDescription}
              readMoreUrl={blogUrl}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>

      {/* <FooterLink
                  phrase='Check out '
                  link='my skills!'
                  toAddress='/skills'
              /> */}
    </div>
  );
};

export default Blogs;
