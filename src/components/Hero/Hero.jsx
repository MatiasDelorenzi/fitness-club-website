import "./hero.css";
import Header from "../Header/Header";
import React from "react";
import heroImage from "../../assets/hero_image.png";
import heroImageBack from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <Header />

        <div className="slogan">
            <div></div>
            <span>The best fitness club in the town</span>
        </div>

        <div className="hero-text">
            <div>
                <span className="stroke-text">SHAPE </span>
                <span>your</span>
            </div>
            <div><span>ideal body</span></div>
            <div className="hero-description">
                <span>Here we will help you shape your ideal body and live to the fullest</span>
            </div>
        </div>

        <div className="numbers">
            <div>
                <span className="">+140</span>
                <span>expert coaches</span>
            </div>
            <div>
                <span>+950</span>
                <span>members</span>
            </div>
            <div>
                <span>+50</span>
                <span>fitness programs</span>
            </div>
        </div>

        <div className="buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Lean More</button>
        </div>
      </div>

      <div className="right">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
            <img src={heart} alt="Heart Rate"/>
            <span>Heart Rate</span>
            <span>116 bpm</span>
        </div>

        <img src={heroImage} alt="" className="hero-image"/>
        <img src={heroImageBack} alt="" className="hero-image-back"/>

        <div className="calories">
            <img src={calories} alt="Calories"/>
            <div>
                <span>Calories burned</span>
                <span>220 Kcal</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
