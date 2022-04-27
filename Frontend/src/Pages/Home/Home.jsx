import React from 'react'
import GameStats from '../../Components/GameStats/GameStats';
import PopularGame from '../../Components/PopularGame/PopularGame';
import SteamUser from '../../Components/SteamUser/SteamUser';
import './home.css'


export default function Home() {
  return (
    <div className='py-16 px-16 h-full'>
      <div className="flex bg-[#18365C] justify-around ">

        <div className="flex flex-col pr-10 gap-5 w-1/3" >
          <GameStats />
          <SteamUser />
        </div>

        <div >
          <PopularGame />
        </div>

      </div>
    </div>

  );
};
