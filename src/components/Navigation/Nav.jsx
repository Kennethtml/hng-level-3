import React from 'react'
import "./nav.scss"
import logo from "../../assets/meta-logo.svg"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from 'react'

function Nav() {
  const[toggle,setToggle]=useState(false)
  return (
    <nav>
      <div className="nav wrapper">
        <div className="logo">
          <img src={logo} alt="meta-logo" />
        </div>
        <ul className={` ${toggle ? `toggle-active` : "nav-links"}`}>
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>

        <button className="btn">Connect wallet</button>

        <div className="hambugger" onClick={() => setToggle(!toggle)}>
          {!toggle && <GiHamburgerMenu />}
          {toggle && <span>X</span>}
        </div>
      </div>
    </nav>
  );
}

export default Nav