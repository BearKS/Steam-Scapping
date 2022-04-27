import React from 'react'
import './navbar.css'
import logo from '../../Assets/Meats.png'
export default function Navbar() {
  return ( 
    <div className='container'>
      <div className='circle' >
          <img src = {logo}/>
      </div>
      <div className='text-logo'>MEATS</div>
    </div>
   );
};

