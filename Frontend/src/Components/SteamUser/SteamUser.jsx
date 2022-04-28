import { useState, useEffect } from "react";
import "./steamuser.css";

export default function SteamUser() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://tocfastapi.herokuapp.com/steam/", {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error();
        }

        const response = await res.json();

        setUser(response[0]);
        setIsLoading(false);
      } catch {}
    };
    fetchData();
  }, []);

  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <>
      <div>
        <div className="pb-3 flex flex-col">
          <div className="text-white font-link font-bold  text-4xl">
            {/* <div className="text-white font-semibold text-4xl"> */}
            Concurrent Steam Users:
          </div>
        </div>

        <div className="detail-steamuser">
          <div className="pb-3 flex flex-col">
            <div className="detail-steamuser font-link">
            {isLoading && (
                <>Loading...</>
              )}
              {!isLoading && (
                <>UPDATED : {longEnUSFormatter.format(new Date(user.timeStamp))}</>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10">
          <div className="flex flex-col gap-2 justify-center text-center  w-[250px] h-[250px] bg-[#] rounded-full ">
            <div className="circulate">
              <div className="circle">
                <div className="wave _one"></div>
                <div className="wave _two"></div>
                <div className="wave _three"></div>
              </div>
            </div>

            <div className="c-base"> 
              <div className="relative text-white text-3xl font-light font-medium font-link w-[230px]">
                Current Players
              </div>
              <div className="relative text-white text-[43px] font-medium pb-7 font-link w-[230px]">
              {isLoading && (
                <>Loading...</>
              )}
              {!isLoading && (
                <>{user.nowPlaying}</>
              )}
                
              </div>
            </div>
          </div>

          {/* 375885 */}
          <div className="flex flex-col gap-2 justify-center text-center w-[250px] h-[250px] bg-[#] rounded-full ">
            {/* <div class="main">
                <div class="circle1" style={{ animation: " circle1 7s linear infinite" }}></div>
              </div> */}
            <div class="circulate1">
              <div class="circle">
                <div class="wave _one"></div>
                <div class="wave _two"></div>
                <div class="wave _three"></div>
              </div>
            </div>
            <div className="c-base ">
              <div className="relative text-white text-3xl font-light font-medium font-link w-[230px]">
                Peak Today
              </div>
              <div className="relative text-white text-[43px] font-medium pb-7 font-link w-[230px]">
              {isLoading && (
                <>Loading...</>
              )}
              {!isLoading && (
                <>{user.dayPeak}</>
              )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
