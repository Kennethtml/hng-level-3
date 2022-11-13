import React from "react";

import "./header.scss";

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
            <div className="hero__container-image img-1"></div>
            <div className="hero__container-image img-2"></div>
            <div className="hero__container-image img-3"></div>
            <div className="hero__container-image img-4"></div>
          </div>
        </div>
      </div>
      <div className="header__footer"></div>
    </header>
  );
}

export default Header;
