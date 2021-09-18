import React from "react";
// import '../App.css';
import { Button } from "./Button";
import "./HeroSection.css";

const HeroSection = () =>  {
  return (
    <div className="hero-container">
      {/* {/* <video src="/videos/video-1.mp4" autoPlay loop muted />{" "} */}
      {/* ใส่vdoพื้นหลังแล้วมันไม่แสดงอะ */}
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Reproduce Image</h1>
      <p>with Genetic Algorithm</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
