import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Select from "react-select";
function Compare() {
  const [selectGame, setSelectGame] = useState();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const handleSelectGame = (e) => {
    console.log(e)
    // setSelectGame(e.value);
  };

  const customStyles = {
    menuPortal: (provided) => ({ ...provided, zIndex: 10 }),
    menu: (provided) => ({ ...provided, zIndex: 10 }),
  };
  return (
    <div className="bg-[#18365C]">
      <Navbar />
      <div className="flex gap-4 m-[36px]">
        <div className="text-4xl">STEAM & GAME STATS</div>
      </div>
      <div className="grid grid-cols-7 gap-4 text-black mr-28 pr-20 sticky top-0 pt-20 bg-[#18365C] w-full drop-shadow-lg border-b-2">
        {/* First Game */}
        <div className="col-start-2 col-span-3 w-5/6 m-auto">
          <div className="bg-slate-400 p-4 rounded-xl">
            <Select
              onChange={handleSelectGame}
              options={options}
              defaultValue={{ value: "Boat", label: "Boat" }}
            />
          </div>
          <img
            className="rounded-xl my-6"
            src="https://image.bangkokbiznews.com/image/kt/media/image/news/2017/08/25/770201/750x422_770201_1503641391.jpg?x-image-process=style/LG"
          />
        </div>
        {/* Second Game */}
        <div className="  m-auto col-span-3 w-5/6">
          <div className="bg-slate-400 p-4 rounded-xl">
            <Select
              isMulti
              name="game"
              options={options}
              onChange={handleSelectGame}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            {/* <Select
              isMulti={true}
              onChange={handleSelectGame}
              options={options}
              menuPortalTarget={document.body}
              menuPosition={"fixed"}
              styles={customStyles}
            /> */}
          </div>
          <img
            className="rounded-xl my-6"
            src="https://image.bangkokbiznews.com/image/kt/media/image/news/2017/08/25/770201/750x422_770201_1503641391.jpg?x-image-process=style/LG"
          />
        </div>
      </div>

      <div className="grid grid-cols-7 pr-20 pt-10 w-full">
        <div className=" col-start-1">
          <div className="bg-slate-800 p-2 pl-5 text-xl rounded-l-xl float-right w-36">
            Description
          </div>
        </div>
        <div className="bg-slate-400 p-2 pl-5 text-lg border-r-4 border-b-4 col-span-3">
          เยอะๆเลยเย็ดแม่
        </div>
        <div className="bg-slate-400 p-2 pl-5 text-lg border-b-4 col-span-3">
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ ยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ ยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ ยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ ยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
        </div>
        <div className=" col-start-1  ml-auto ">
          <div className="bg-slate-800 p-2 pl-5 text-xl rounded-l-xl float-right w-36">
            Topic
          </div>
        </div>
        <div className="bg-slate-400 p-2 pl-5 text-lg border-r-4 border-b-4 col-span-3">
          เยอะๆเลยเย็ดแม่
        </div>
        <div className="bg-slate-400 p-2 pl-5 text-lg border-b-4 col-span-3">
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ ยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
        </div>
        <div className=" col-start-1 ml-auto ">
          <div className="bg-slate-800 p-2 pl-5 text-xl rounded-l-xl float-right w-36">
            Review
          </div>
        </div>
        <div className="bg-slate-400 p-2 pl-5 text-lg border-r-4 border-b-4 col-span-3">
          เยอะๆเลยเย็ดแม่
        </div>
        <div className="bg-slate-400 p-2 pl-5 text-lg border-b-4 col-span-3">
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ ยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
          เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่ เยอะๆเลยเย็ดแม่
        </div>
      </div>
    </div>
  );
}

export default Compare;
