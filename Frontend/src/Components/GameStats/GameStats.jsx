import React, { useEffect } from 'react'
import Chart from '../Chart/Chart';
import './gamestate.css'

export default function GameStats() {

  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData = async() => {
    res = await fetch("https://store.steampowered.com/stats/userdata.json", {
            method: "GET",
          });
    res = res.json()
    console.log(res)
  }


  return (
    <div className='h-[300px] w-full mb-24'>
      <div className='title-graph'>STEAM & GAME STATS</div>
      {/* <div className='text-white text-xl pb-3'>UPDATED: 6 APRIL, 2022 @ 11.26PM</div> */}
      <div className='updated'>UPDATED: 6 APRIL, 2022 @ 11.26PM</div>
      <Chart />
    </div>
  );
};
