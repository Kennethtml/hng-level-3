import React from 'react'
import "./shopcard.scss"
import star from "../../assets/Star.svg"
import { Love } from '../../utils/shopData'

function ShopCard({shopItem}) {
    const{image,name,cost,distance,duration,stars}=shopItem
  return (
    <div className="card">
      <div className="card__image" >
      <Love />

      <img src={image} alt="" />
      </div>
      <div className="card__main">
        <h3 className="name">{name}</h3>
        <p className="cost">{cost}</p>
      </div>
      <div className="card__sub">
        <p className="distance">{distance}</p>
        <p className="duration">{duration}</p>
      </div>
      <div className="stars">
        {new Array(stars).fill().map((starz) => {
          return <img src={star} alt="star" className="star" />;
        })}
      </div>
    </div>
  );
}

export default ShopCard