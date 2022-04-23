import React from 'react'
import './populargamelist.css'
import Tag from '../../Components/Tag/Tag'
import star from '../../star-full.svg';

export default function PopularGameList() {
  return (
    <div className='game-list-container'>
      <div className='game-list-box'>
        <div className='roww'>
          <div className='col1'>
            <img className='img-game' src="https://www.looper.com/img/gallery/every-mario-game-on-nintendo-switch-ranked-worst-to-best/l-intro-1631623336.jpg" />
          </div>

          <div className='col2'>
            <div className='name-col2'>
              <div className='game-name'>NAME</div>
            </div>

            <div className='tag-col2'>
              <Tag />
              <Tag />
              <Tag />
              <Tag />
            </div>
          </div>

          <div className='col3' />
            <img className='rating-pic' src={star}></img>
            <div className='rating-input'>4.8</div>
            <div className='rating-fullpoint'>/5</div>

        </div>
      </div>
    </div>
  );
};
