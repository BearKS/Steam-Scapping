import React from 'react'
import './navbar.css'
import logo from '../../Assets/Meats.png'
export default function Navbar() {
  return ( 
    <div className='flex p-4 gap-3 container items-center'>
      <div className='h-[47px] w-[47px]' >
          <img src = {logo}/>
      </div>
      <div className='text-logo'>MEATS</div>
    </div>
   );
};

