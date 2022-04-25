import React from "react";
import PopularGameList from "../PopularGameList/PopularGameList";
import "./populargame.css";

export default function PopularGame() {
  return (
    <div>
      <div className="title-popgame">POPULAR GAMES</div>

      <div className="pop-game-box">
        <input
          type="radio"
          id="tabAll"
          name="pop-game-box"
          defaultChecked="checked"
        ></input>
        <label for="tabAll" className="hover:underline underline-offset-8">
          All
        </label>
        <div class="tab">
          {/* <h2>this is on All tab!!</h2> */}
          <div className="pgbs-container">
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
          </div>
        </div>

        <input type="radio" id="tabRPG" name="pop-game-box"></input>
        <label for="tabRPG" className="hover:underline underline-offset-8">
          RPG
        </label>
        <div class="tab">
          {/* <h2>this is on RPG tab!!</h2> */}
          <div className="pgbs-container">
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
          </div>
        </div>

        <input type="radio" id="tabMOBA" name="pop-game-box"></input>
        <label for="tabMOBA" className="hover:underline underline-offset-8">
          MOBA
        </label>
        <div class="tab">
          {/* <h2>this is on MOBA tab!!</h2> */}
          <div className="pgbs-container">
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
          </div>
        </div>

        <input type="radio" id="tabAction" name="pop-game-box"></input>
        <label for="tabAction" className="hover:underline underline-offset-8">
          Action
        </label>
        <div class="tab">
          {/* <h2>this is on Action tab!!</h2> */}
          <div className="pgbs-container">
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
          </div>
        </div>
        <input type="radio" id="tab2" name="pop-game-box"></input>
        <label for="tab2" className="hover:underline underline-offset-8">2</label>
        <div class="tab">
          {/* <h2>this is on ... tab!!</h2> */}
          <div className="pgbs-container">
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
          </div>
        </div>
        <input type="radio" id="tab..." name="pop-game-box"></input>
        <label for="tab..." className="hover:underline underline-offset-8">
          ...
        </label>
        <div class="tab">
          {/* <h2>this is on ... tab!!</h2> */}
          <div className="pgbs-container">
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
          </div>
        </div>
      </div>

      {/* <div className='sh-more'>Show more</div> */}

      {/* <div className='bbb1'></div>
      <div className='bbb2'></div>
      <div className='bbb3'></div>
      <div className='bbb4'></div>
      <div className='bbb5'></div> */}
    </div>
  );
}
