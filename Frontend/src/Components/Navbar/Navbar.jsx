import React from "react";
import "./navbar.css";
import logo from "../../Assets/Meats.png";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex flex-row p-4 gap-3 container items-center">
      <div className="h-[47px] w-[47px]">
        <img src={logo} />
      </div>
      <div className="text-logo">
        <NavLink to={"/"}>MEATS</NavLink>
      </div>
      <div className="flex  text-white font-medium text-3xl basis-full justify-end ">
        <NavLink
          className=" bg-yellow-600 pb-2 pt-1 px-2 rounded-lg hover:bg-yellow-700 flex justify-center items-center"
          to={"/Search"}
        >
          <svg
            class="h-7 w-7 text-white mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search
        </NavLink>
      </div>
    </div>
  );
}
