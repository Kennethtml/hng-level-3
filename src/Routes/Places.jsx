import React from 'react'
import { shopData2 } from '../utils/shopData';
import ShopCard from '../components/ShopCard/ShopCard';

function Places() {
  return (
    <>
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