import React from 'react'
import Chart from '../Chart/Chart';
import './gamestate.css'

export default function GameStats() {
  return (
    <div className='h-[300px] w-full mb-24'>
      <div className='title-graph'>STEAM & GAME STATS</div>
      {/* <div className='text-white text-xl pb-3'>UPDATED: 6 APRIL, 2022 @ 11.26PM</div> */}
      <div className='updated'>UPDATED: 6 APRIL, 2022 @ 11.26PM</div>
      <Chart />
    </div>
  );
};
