import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav-bar'>

    <form className='search'>
        <input type="search" placeholder='suschen..'/>
    </form>
        <ul>
            <li>Rezept einlösen</li>
            <li>Live Bestand</li>
            <li>Videosprechstunde</li>
            <li>FAQs</li>
            <li>Kontakt</li>
        </ul>
        <div className="but-1">
        <img src={'./cart.png'} alt="cart" width={40} height={40} />
        <button>Anmelden</button>
        </div>
        
    </div>
  )
}

export default Nav
