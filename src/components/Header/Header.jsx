import React from "react";

import "./header.scss";
import hero1 from "../../assets/hero-1.jpg"
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";
import hero4 from "../../assets/hero-4.jpg";
import mbtoken from "../../assets/mbtoken.svg"
import metamask from "../../assets/metamask.svg"
import opensea from "../../assets/opensea.svg"

function Header() {
  return (
    <header className="header">
      <div className="header__body wrapper">
        <div className="header__body-text">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the
            <span> Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your <br /> imagination to reality
            at your comfort zone
          </p>
          <form action="" className="form">
            <input type="text" placeholder="Search for location" />
            <button className="btn">search</button>
          </form>
        </div>
        <div className="header__body-hero">
          <div className="hero__container">
            <div className="hero__container-image img-1">
              <img src={hero1} alt="hero image" />
            </div>
            <div className="hero__container-image img-2">
              <img src={hero2} alt="hero image" />
            </div>
            <div className="hero__container-image img-3">
              <img src={hero3} alt="hero image" />
            </div>
            <div className="hero__container-image img-4">
              <img src={hero4} alt="hero image" />
            </div>
          </div>
        </div>
      </div>
      <div className="header__footer">
        <img src={mbtoken} alt="mb token logo" /><img src={metamask} alt="metamask logo" /><img src={opensea} alt="open sea logo" />
      </div>
    </header>
  );
}

export default Header;
