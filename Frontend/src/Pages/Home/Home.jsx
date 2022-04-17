import React from 'react'
import GameStats from '../../Components/GameStats/GameStats';
import PopularGame from '../../Components/PopularGame/PopularGame';
import SteamUser from '../../Components/SteamUser/SteamUser';
import './home.css'


export default function Home() {
  return (
    <div className='home-container'>
      <div class="row">

        <div class="column1" >
          <GameStats />
          <SteamUser />
        </div>

        <div class="column2">
          <PopularGame />
        </div>

      </div>
    </div>

  );
};
