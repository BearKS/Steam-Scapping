import React from "react";
import "./steamuser.css";

export default function SteamUser() {
  return (
    <div>

      <div className="pb-3 flex flex-col">
        <div className="title-steamuser">
        {/* <div className="text-white font-semibold text-4xl"> */}
          Concurrent Steam Users:
        {/* </div> */}
        </div>
      </div>

      <div className="detail-steamuser">
        <div className="pb-3 flex flex-col">
          <div className="detail-steamuser">(most recent 48 hours)</div>
        </div>
      </div>


      <div className="flex justify-center gap-10">
        <div className="flex w-[250px] h-[250px] bg-[#375885] rounded-full relative">
          <div className="current-users">
            <div className="absolute top-14 left-[2.4em] text-white text-3xl font-light">Current</div>
          </div>
            <div className="absolute top-24 left-2 text-white text-5xl font-medium">24,709,428</div>
        </div >

        <div className="flex w-[250px] h-[250px] bg-[#375885] rounded-full relative">
          <div className=""></div>
          <div className="peak-users">
            <div className="absolute top-14 left-[3.2em] text-white text-3xl font-light">Peak</div>
          </div>
          <div className="absolute top-24 left-2 text-white text-5xl font-medium">28,481,344</div>
        </div>
      </div>


    </div>
  );
}
