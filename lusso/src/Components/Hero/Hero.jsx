import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="container">
      <span className="header">LussoVentures</span>{" "}
      <div className="container-one">
        <span className="SubHeader">Redefining Global Luxury Real Estate</span>
        <p>
          Lusso Ventures is a private investment fund building iconic living
          experiences in the
        </p>{" "}
        <span>world's most coveted cities.</span>
        <button className="btn">Request Investor Access</button>
      </div>
    </div>
  );
};

export default Hero;
