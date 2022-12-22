import React from "react";
import "./Header.css";

const Header = ({ heading, details, className }) => {
  return (
    <div className={`header-container ${className}`}>
      <h1>{heading}</h1>
      <p>{details}</p>
    </div>
  );
};

export default Header;
