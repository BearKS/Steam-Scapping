import React from 'react'
import './navbar.css'
import logo from '../../Assets/Meats.png'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return ( 
    <div className='flex flex-row p-4 gap-3 container items-center'>
      <div className='h-[47px] w-[47px]' >
          <img src = {logo}/>
      </div>
      <div className='text-logo'><NavLink to={"/"}>MEATS</NavLink></div>
      <div className='flex text-logo basis-full justify-end'><NavLink to={"/Search"}>Search</NavLink></div>
    </div>
   );
};

