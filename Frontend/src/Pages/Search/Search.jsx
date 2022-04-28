import React, { useEffect, useState } from "react";
import Select from "react-select";

import PopularGameList from "../../Components/PopularGameList/PopularGameList";

import loading from "../../Assets/giphy.gif";
import "./search.css";

function Search() {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState({
    dayPeak: "0",
    nowPlaying: "0",
  });
  const [allPlaying, setAllPlaying] = useState();
  const [showTag, setShowTag] = useState([]);
  const [gameByTag, setGameByTag] = useState();
  const [gamesOptions, setGameOptions] = useState([]);
  const [games, setGames] = useState();
  const gameOptionss = [];

  const getData = async () => {
    const data = await fetch("https://tocfastapi.herokuapp.com/", {
      method: "GET",
    });
    let res = await data.json();
    setData({
      dayPeak: res.sum_dayPeak,
      nowPlaying: res.sum_nowPlaying,
    });
    setAllPlaying(res.sum_nowPlaying)
    res = res.gameData;
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
    
    setData({
      dayPeak: res.sum_dayPeak,
      nowPlaying: res.sum_nowPlaying,
    });
    res = res.gameData;
    res = res.filter((e) => e.name !== "No data");
    setGameByTag(res);
    setIsloading(false);
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
    setIsloading(true);
    getData();
    setIsloading(false);
  }, []);

  useEffect(() => {
    setIsloading(true);
    getDataByTag();
  }, [showTag]);

  return (
    <div className="h-full w-full">
      <div className="flex  justify-center pt-10 h-full w-full">
        <Select
          isMulti
          name="game"
          options={gamesOptions}
          onChange={handleSelectGame}
          className="basic-multi-select w-[1200px]"
          classNamePrefix="select"
        />
      </div>
      <div className="flex justify-center pt-5 h-full w-full">
        <div className="pop-game-box">
          <div className="text-4xl text-white pb-5 w-full">
            {showTag.length === 0 ? (
              <div className="flex flex-row justify-between font-link">
                <h1>You haven't searched any tag</h1>
                <h1>Playing : {allPlaying}</h1>
              </div>
            ) : (
              <div>
                {gameByTag.length === 0 ? (
                  <div className="flex flex-row justify-between font-link">
                    <h1>Results : 0 game</h1>
                    <h1>Playing : 0</h1>
                  </div>
                ) : (
                  <div className="flex flex-row justify-between font-link">
                    <h1>Results : {gameByTag.length} Found</h1>
                    <h1>Playing : {data.nowPlaying}</h1>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="h-[650px] overflow-x-scroll overflow-y-scroll bg-gray-200 w-full">
            <div className="flex flex-col gap-3 p-5 h-full w-full">
              <div className="h-full w-full">
                {games === undefined || games.length === 0 ? (
                  <div className="flex justify-center items-center h-full w-full">
                    <img
                      className="rounded-full h-[200px] "
                      src={loading}
                      alt="Loading"
                    />
                  </div>
                ) : (
                  <div className="h-full w-full">
                    {showTag.length === 0 || showTag === undefined ? (
                      <div className="flex flex-col gap-3">
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
                    ) : (
                      <div className="h-full w-full">
                        {isLoading ? (
                          <div className="flex justify-center items-center h-full w-full">
                            <img
                              className="rounded-full h-[200px] "
                              src={loading}
                              alt="Loading"
                            />
                          </div>
                        ) : (
                          <div className="font-link">
                            {gameByTag === undefined ||
                            gameByTag === null ||
                            gameByTag.length === 0 ? (
                              <div>Not Found</div>
                            ) : (
                              <div className="flex flex-col gap-3">
                                {gameByTag.map((game, index) => {
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
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
