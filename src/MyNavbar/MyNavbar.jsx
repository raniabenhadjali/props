import React from 'react'
import './MyNavbar.css'

const MyNavbar = () => {
  return (
    <nav>
     <ul className='liste'>
        <li className='items'>accueil</li>
        <li className='items'>service</li>
        <li className='items'>contact</li>
     </ul>
     <button className='btn'>BTN</button>


    </nav>
  )
}

export default MyNavbar