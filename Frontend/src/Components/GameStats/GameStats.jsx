import React, { useEffect, useState } from "react";
import Chart from "../Chart/Chart";
import "./gamestate.css";

export default function GameStats() {
  const [time, setTime] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getTime();
  }, []);

  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const getTime = async () => {
    setIsLoading(true)
    let res = await fetch("https://tocfastapi.herokuapp.com/steam/", {
      method: "GET",
    });
    let resData = await res.json();
    const time = longEnUSFormatter.format(new Date(resData[0].timeStamp));
    setTime(time);
    setIsLoading(false)
  };

  return (
    <div className="h-[300px] w-full mb-24 font-link">
      <div className="title-graph font-link">STEAM & GAME STATS</div>
      {/* <div className='text-white text-xl pb-3'>UPDATED: 6 APRIL, 2022 @ 11.26PM</div> */}
      <div className="updated font-link">
        {isLoading && <>Loading...</>}
        {!isLoading && <>UPDATED : {time}</>}
      </div>

      <Chart />
    </div>
  );
}
