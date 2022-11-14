import React from 'react'
import "./nav.scss"
import logo from "../../assets/meta-logo.svg"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from 'react'
import { useContext } from "react";
import { ModalContext } from '../../utils/Modalcontext'
import { NavLink } from 'react-router-dom'

function Nav() {
  const[toggle,setToggle]=useState(false)
const{setIsModalOpen}=useContext(ModalContext)
  return (
    <nav>
      <div className="nav wrapper">
        <div className="logo">
          <img src={logo} alt="meta-logo" />
        </div>
        <ul className={` ${toggle ? `toggle-active` : "nav-links"}`}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/places"}>Place to stay</NavLink>
          <li>NFTs</li>
          <li>Community</li>
        </ul>

        <button className="btn" onClick={()=>setIsModalOpen(true)}>Connect wallet</button>

        <div className="hambugger" onClick={() => setToggle(!toggle)}>
          {!toggle && <GiHamburgerMenu />}
          {toggle && <span>X</span>}
        </div>
      </div>
    </nav>
  );
}

export default Nav