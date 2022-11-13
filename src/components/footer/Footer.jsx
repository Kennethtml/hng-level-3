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
        <img src={logo} alt="" />
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
          <h4>Community</h4>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div className="footer__navigation-about">
          <h4>Community</h4>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
      </div>
      <div className="footer__social-links">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
      </div>
      <div className="footer__copyright">
        <p>c 2022 metaBnB</p>
      </div>
</div>
    </footer>
  );
}

export default Footer