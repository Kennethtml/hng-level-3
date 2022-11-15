import React from 'react'
import "./footer.scss"
import logo from "../../assets/Group.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

function Footer() {
  return (
    <footer>
<div className="footer wrapper">

      <div className="logo">
        <img src={logo} alt="meta" />
      </div>
      <div className="footer__navigation">
        <div className="footer__navigation-community">
          <h4>Community</h4>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div className="footer__navigation-places">
          <h4>Places</h4>
          <p>Castle</p>
          <p>Farm</p>
          <p>Beaches</p>
          <p>Learn more</p>
        </div>
        <div className="footer__navigation-about">
          <h4>About us</h4>
          <p>Road map</p>
          <p>Creators</p>
          <p>Careers</p>
          <p>Contact us</p>
        </div>
      </div>
      <div className="footer__social-links">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
      </div>
      <div className="footer__copyright">
        <p>&copy; 2022 Metabnb</p>
      </div>
</div>
    </footer>
  );
}

export default Footer