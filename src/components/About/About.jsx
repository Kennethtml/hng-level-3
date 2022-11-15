import React from 'react'
import "./about.scss"
import home1 from '../../assets/about-image.png'
import home2 from "../../assets/home-2.jpg";
import home3 from "../../assets/home-3.jpg";

function About() {
  return (
    <section className="about ">
        <div className="wrapper about__container">

      <div className="about__cta">
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="btn">Learn more</button>
      </div>
      <div className="about__images">
        <img src={home1} className="about-1" alt="about" />
       
      </div>
        </div>
    </section>
  );
}

export default About