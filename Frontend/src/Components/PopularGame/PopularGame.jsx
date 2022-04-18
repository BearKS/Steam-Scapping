import React from 'react'
import PopularGameList from '../PopularGameList/PopularGameList';
import './populargame.css'


export default function PopularGame() {
  return (
    <div>
      <div className='title-popgame'>POPULAR GAMES</div>
      <div className='pop-game-box'>
        <button className='butt'>All</button>
        <button className='butt'>RPG</button>
        <button className='butt'>MOBA</button>
        <button className='butt'>Action</button>
        <button className='butt'>...</button>
        <div className='pop-game-box-show'>
          <div className='pgbs-container'>
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
          </div>
        </div>
      </div>
        {/* <div className='bbb1'></div>
        <div className='bbb2'></div>
        <div className='bbb3'></div>
        <div className='bbb4'></div>
        <div className='bbb5'></div> */}
    </div>
  );
};