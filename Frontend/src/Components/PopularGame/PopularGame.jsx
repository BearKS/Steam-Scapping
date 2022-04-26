import React from "react";
import PopularGameList from "../PopularGameList/PopularGameList";
import "./populargame.css";

const URL = `https://cc-mock-api.herokuapp.com`;

export default function PopularGame() {

  // const [Data, DataSet] = useState([]);
  // const [List, setList] = useState([{
  //   _id: "",
  //   name: "",
  //   gameData: "",
  // }]);

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let res = await fetch(URL);
  //     res = await res.json();

  //     console.log('hello')
  //     console.log(JSON.stringify(res))

  //     const shList = List;

  //     for (let i=0;i<res.length;i++){
  //       shList[i] = {
  //         _id: res[i]._id,
  //         name: res[i].name,
  //         gameData: res[i].gameData,
  //       };
  //     }
  //     console.log('shList' + shList)
  //     setList(shList);
  //     DataSet(JSON.stringify(res));
  //   }
  //   fetchMyAPI();
  // }, []);


  return (
    <div>
      <div className="title-popgame">POPULAR GAMES</div>

      <div className="pop-game-box">
        <input type="radio" id="tabAll" name="pop-game-box" defaultChecked="checked"/>
        <label for="tabAll" className="hover:underline underline-offset-8">
          All
        </label>
        <div class="tab">
          {/* <h2>this is on All tab!!</h2> */}
          <div className="pgbs-container">
            {/* {List.map((game) => (
              <PopularGameList key={game._id} game={game}></PopularGameList>
            ))} */}
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

        <input type="radio" id="tabRPG" name="pop-game-box"/>
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
        <label for="tab2" className="hover:underline underline-offset-8">...</label>
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


        {/* <div>
          {List.map((product) => (
            <PopularGameList key={product._id} product={product}></PopularGameList>
          ))}
        </div> */}

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
