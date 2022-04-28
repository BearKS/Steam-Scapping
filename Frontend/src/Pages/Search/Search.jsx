import React, { useEffect, useState } from "react";
import Select from "react-select";

import PopularGameList from "../../Components/PopularGameList/PopularGameList";

import "./search.css";

function Search() {
  const [showTag, setShowTag] = useState();
  const [gameByTag, setGameByTag] = useState();
  const [gamesOptions, setGameOptions] = useState([]);
  const [games, setGames] = useState();
  const gameOptionss = [];

  const getData = async () => {
    const data = await fetch("https://tocfastapi.herokuapp.com/", {
      method: "GET",
    });
    let res = await data.json();
    res = res.filter((e) => e.name !== "No data");
    setGames(res);
    addTag(res);
  };

  const getDataByTag = async () => {
    const data = await fetch("https://tocfastapi.herokuapp.com/findByTag", {
      method: "POST",
      body: JSON.stringify({
        tag: showTag,
      }),
    });
    let res = await data.json();
    res = res.filter((e) => e.name !== "No data");
    setGameByTag(res);
  };

  const addTag = (data) => {
    data.forEach((game) => {
      game.tag.forEach((tag) => {
        const tagOption = { value: tag, label: tag };
        sortTag(tagOption);
      });
    });
    setGameOptions(gameOptionss);
  };

  const sortTag = async (tag) => {
    if (gameOptionss.filter((x) => x.value === tag.value).length === 0) {
      gameOptionss.push(tag);
    }
  };

  const setTag = (e) => {
    const tags = [];
    e.forEach((tag) => {
      tags.push(tag.value);
    });
    setShowTag(tags);
  };

  const handleSelectGame = (e) => {
    setTag(e);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getDataByTag();
  }, [showTag]);

  return (
    <div>
      <Select
        isMulti
        name="game"
        options={gamesOptions}
        onChange={handleSelectGame}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <div className="pop-game-box">
        <input
          type="radio"
          id="tabAll"
          name="pop-game-box"
          defaultChecked="checked"
        />
        <label htmlFor="tabAll" className="hover:underline underline-offset-8">
          Results
        </label>
        <div className="tab">
          <div className="flex flex-col gap-3 p-5">
            <div>
              {gameByTag === undefined || gameByTag.length === 0 ? (
                <div>
                  {games === undefined || games.length === 0 ? (
                    <div>Loading</div>
                  ) : (
                    <div>
                      {" "}
                      {games.map((game, index) => {
                        return (
                          <PopularGameList
                            {...game}
                            index={index}
                            key={game.id}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {" "}
                  {gameByTag.map((game, index) => {
                    return (
                      <PopularGameList {...game} index={index} key={game.id} />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
