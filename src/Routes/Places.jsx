import React from 'react'
import { shopData2 } from '../utils/shopData';
import ShopCard from '../components/ShopCard/ShopCard';
import "./places.scss"
import { useContext, useEffect } from "react";
import { ModalContext } from "../utils/Modalcontext";
import location from "../../src/assets/setting-5.svg"

function Places() {
   const { setToggle } = useContext(ModalContext);
   useEffect(() => {
     setToggle(false);
   }, []);
  return (
    <>
      <div className="sub-nav wrapper">
        <ul className=" locations">
          <li>
            <p>Restaurant</p>
          </li>
          <li>
            <p>Cottage</p>
          </li>
          <li>
            <p>Castle</p>
          </li>
          <li>
            <p>fantast city</p>
          </li>
          <li>
            <p>beach</p>
          </li>
          <li>
            <p>carbins</p>
          </li>
          <li>
            <p> off grid</p>
          </li>
          <li>
            <p> farm</p>
          </li>
        </ul>
        <div className="location">
          <p>location</p>
          <img src={location} alt="locaion" />
        </div>
      </div>
      <div className="wrapper">
        <div className="shop__cards">
          {shopData2.map((shopItem, idx) => {
            return <ShopCard key={idx} shopItem={shopItem} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Places