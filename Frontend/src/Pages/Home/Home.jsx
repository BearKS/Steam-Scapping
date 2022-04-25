import React from 'react'
import GameStats from '../../Components/GameStats/GameStats';
import PopularGame from '../../Components/PopularGame/PopularGame';
import SteamUser from '../../Components/SteamUser/SteamUser';
import './home.css'


export default function Home() {
  return (
    <div className='pt-20 h-screen'>
      <div className="flex px-10 py-5 bg-[#18365C] justify-between ">

        <div className="flex flex-col pr-10 gap-5 w-1/3" >
          <GameStats />
          <SteamUser />
        </div>

        <div class="">
          <PopularGame />
        </div>

      </div>
    </div>

  );
};
