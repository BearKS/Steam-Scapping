import React from 'react'
import PopularGameList from '../PopularGameList/PopularGameList';
import './populargame.css'


export default function PopularGame() {
  return (
    <div className='pop-game-container'>
      <div className='title-text'>POPULAR GAMES</div>
      <div className='pop-game-box'>
        <button className='butt'>All</button>
        <button className='butt'>RPG</button>
        <button className='butt'>MOBA</button>
        <button className='butt'>Action</button>
        <button className='butt'>...</button>
        <div className='pop-game-box-show'>
          <PopularGameList />
          <PopularGameList />
          <PopularGameList />
          <PopularGameList />
          <PopularGameList />
        </div>
      </div>
    </div>
  );
};