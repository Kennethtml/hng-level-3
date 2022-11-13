import React from 'react'
import "./shop.scss"
import {shopData} from "../../utils/shopData"
import ShopCard from '../ShopCard/ShopCard'

function Shop() {
  return (
    <section className='shop wrapper'>
        <h2>Inspiration for your next adventure</h2>
        <div className="shop__cards">
            {shopData.map((shopItem,idx)=>{
                return <ShopCard key={idx} shopItem={shopItem}/>
            })}

        </div>
    
        </section>
  )
}

export default Shop