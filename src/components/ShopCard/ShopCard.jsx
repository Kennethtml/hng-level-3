import React from 'react'
import "./shopcard.scss"
import star from "../../assets/Star.svg"

function ShopCard({shopItem}) {
    const{image,name,cost,distance,duration,stars}=shopItem
  return (
    <div className='card'>
        <img src={image} alt="" className="card__image" />
        <div className="card__main">
            <h3 className='name'>{name}</h3>
            <p className="cost">{cost}</p>
        </div>
        <div className="card__sub">
            <p className="distance">{distance}</p>
            <p className='duration'>{duration}</p>
        </div>
        <div className="stars">{new Array(stars).fill().map((starz)=>{
            return <img src={star} alt="star" className="star" />;
        })
        }</div>


    </div>
  )
}

export default ShopCard