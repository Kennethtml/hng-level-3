import React from 'react'
import "./nav.scss"

function Nav() {
  return (
    <nav className='nav wrapper'>
        <div className="logo">Meta</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
        <button className='btn'>
          Connect wallet
        </button>
        
    </nav>
  )
}

export default Nav