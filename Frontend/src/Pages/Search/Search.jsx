import React, { useEffect, useState } from "react";
import Select from "react-select";

import PopularGameList from "../../Components/PopularGameList/PopularGameList";

import loading from "../../Assets/giphy.gif";
import "./search.css";

function Search() {
  const [isLoading, setIsloading] = useState(false);

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
    getData();
  }, []);

  useEffect(() => {
    setIsloading(true);
    getDataByTag();
  }, [showTag]);

  return (
    <div>
      <div className="flex  justify-center pt-10">
        <Select
          isMulti
          name="game"
          options={gamesOptions}
          onChange={handleSelectGame}
          className="basic-multi-select w-[800px]"
          classNamePrefix="select"
        />
      </div>
      <div className="flex justify-center pt-5">
        <div className="pop-game-box">
          <div className="text-4xl text-white pb-5">
            {showTag.length === 0 ? (
              <div>You haven't searched any tag</div>
            ) : (
              <div>
                {gameByTag.length === 0 ? (
                  <div>Results : 0 game</div>
                ) : (
                  <div>Results : {gameByTag.length} Found</div>
                )}
              </div>
            )}
          </div>

          <div className="tab">
            <div className="flex flex-col gap-3 p-5">
              <div>
                {games === undefined || games.length === 0 ? (
                  <div className="flex justify-center items-center h-full w-full">
                    <img
                      className="rounded-full h-1/3 "
                      src={loading}
                      alt="Loading"
                    />
                  </div>
                ) : (
                  <div>
                    {showTag.length === 0 || showTag === undefined ? (
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
                    ) : (
                      <div>
                        {isLoading ? (
                          <div className="flex justify-center items-center h-full w-full">
                            <img
                              className="rounded-full h-1/3 "
                              src={loading}
                              alt="Loading"
                            />
                          </div>
                        ) : (
                          <div>
                            {gameByTag === undefined ||
                            gameByTag === null ||
                            gameByTag.length === 0 ? (
                              <div>Not Found</div>
                            ) : (
                              <div>
                                {" "}
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
