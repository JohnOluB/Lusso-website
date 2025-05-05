import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="container">
      <span className="header">LussoVentures</span>{" "}
      <p className="SubHeader">Redefining Global Luxury Real Estate</p>
      <div className="container-one">
        <p>
          Lusso Ventures is a private investment fund building iconic living
          experiences in the
        </p>{" "}
        <span>world's most coveted cities.</span>
      </div>
      <button className="btn">Request Investor Access</button>
    </div>
  );
};

export default Hero;
