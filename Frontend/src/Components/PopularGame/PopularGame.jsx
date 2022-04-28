import { useState, useEffect, useCallback } from "react";
import PopularGameList from "../PopularGameList/PopularGameList";
import "./populargame.css";
import loading from "../../Assets/giphy.gif";
const URL = `https://cc-mock-api.herokuapp.com`;

export default function PopularGame() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [tab, setTab] = useState("All");

  const tagList = ["All", "Action", "FPS", "RPG", "Sports", "Horror"];
  const fetchData = useCallback(async (tag = null) => {
    setIsLoading(true);
    try {
      let res;
      if (!tag) {
        res = await fetch("https://tocfastapi.herokuapp.com/", {
          method: "GET",
        });
      } else {
        res = await fetch("https://tocfastapi.herokuapp.com/findByTag", {
          method: "POST",
          body: JSON.stringify({
            tag: [tag],
          }),
        });
      }

      if (!res.ok) {
        throw new Error();
      }

      let responseData = await res.json();

      responseData = responseData.gameData;

      responseData = responseData.filter((e) => e.name !== "No data");
      // console.log(responseData);
      setData(responseData);

      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="title-popgame">POPULAR GAMES</div>
      <div className="flex flex-col mt-8 w-[1200px]">
        <div className="flex">
          {tagList.map((e, index) => {
            return (
              <div
                key={index}
                className={`flex font-semibold w-[200px] h-[70px] items-center justify-center bg-gray-500 rounded-t-2xl border-x-2 border-t-2 border-[#18365C] text-white text-4xl hover:underline underline-offset-8 ${
                  e === tab
                    ? "bg-[#C9C9C9] text-[#32415a]"
                    : "bg-[#32415a] text-[#C9C9C9]"
                }`}
                onClick={() => {
                  if (!isLoading) {
                    setTab(e);
                    if (e === "All") {
                      fetchData(null);
                    } else {
                      fetchData(e);
                    }
                  }

                  console.log(e);
                }}
              >
                {e}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 h-[600px] w-full bg-gray-200 rounded-b-2xl p-5 overflow-y-scroll overflow-x-scroll">
          {isLoading && (
            <div className="flex justify-center items-center h-full w-full">
              <img
                className="rounded-full h-1/3 "
                src={loading}
                alt="Loading"
              />
            </div>
          )}
          {!isLoading && (
            <>
              {data.map((e, index) => {
                return <PopularGameList {...e} index={index} key={index} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
