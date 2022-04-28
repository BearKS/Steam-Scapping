import React from 'react'
import GameStats from '../../Components/GameStats/GameStats';
import PopularGame from '../../Components/PopularGame/PopularGame';
import SteamUser from '../../Components/SteamUser/SteamUser';
import './home.css'


export default function Home() {
  return (
    <div className='py-10 px-24 h-full'>
      <div className="flex  justify-around gap-10">

        <div className="flex flex-col  gap-5 w-1/3" >
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
