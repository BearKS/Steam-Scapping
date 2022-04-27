import { useState, useEffect } from "react";
import PopularGameList from "../PopularGameList/PopularGameList";
import "./populargame.css";

const URL = `https://cc-mock-api.herokuapp.com`;

export default function PopularGame() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Counter-Strike: Global Offensive",
      description:
        "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
      review: "Very Positive",
      tag: [
        "FPS",
        "Shooter",
        "Multiplayer",
        "Competitive",
        "Action",
        "Team-Based",
        "eSports",
        "Tactical",
        "First-Person",
        "PvP",
        "Online Co-Op",
        "Co-op",
        "Strategy",
        "Military",
        "War",
        "Difficult",
        "Trading",
        "Realistic",
        "Fast-Paced",
        "Moddable",
      ],
      developer: "Valve, Hidden Path Entertainment",
      publisher: "Valve",
      url: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
      cover_url:
        "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
    },
    {
      id: 2,
      name: "Counter-Strike: Global Offensive",
      description:
        "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
      review: "Overwhelmingly Negative",
      tag: [
        "FPS",
        "Shooter",
        "Multiplayer",
        "Competitive",
        "Action",
        "Team-Based",
        "eSports",
        "Tactical",
        "First-Person",
        "PvP",
        "Online Co-Op",
        "Co-op",
        "Strategy",
        "Military",
        "War",
        "Difficult",
        "Trading",
        "Realistic",
        "Fast-Paced",
        "Moddable",
      ],
      developer: "Valve, Hidden Path Entertainment",
      publisher: "Valve",
      url: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
      cover_url:
        "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
    },
    {
      id: 3,
      name: "Counter-Strike: Global Offensive",
      description:
        "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
      review: "Mixed",
      tag: [
        "FPS",
        "Shooter",
        "Multiplayer",
        "Competitive",
        "Action",
        "Team-Based",
        "eSports",
        "Tactical",
        "First-Person",
        "PvP",
        "Online Co-Op",
        "Co-op",
        "Strategy",
        "Military",
        "War",
        "Difficult",
        "Trading",
        "Realistic",
        "Fast-Paced",
        "Moddable",
      ],
      developer: "Valve, Hidden Path Entertainment",
      publisher: "Valve",
      url: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
      cover_url:
        "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
    },
  ]);
 
  const [RPG, setRPG] = useState();
  const [MOBA,setMOBA] = useState();
  const [action,setAction] = useState();
  const [horror,setHorror] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://tocfastapi.herokuapp.com/", {
          method: "GET",
        });

        const resRPG = await fetch(
          "https://tocfastapi.herokuapp.com/findByTag",
          {
            method: "POST",
            body: JSON.stringify({
              tag: ["RPG"],
            }),
          }
        );

        const resMOBA = await fetch(
          "https://tocfastapi.herokuapp.com/findByTag",
          {
            method: "POST",
            body: JSON.stringify({
              tag: ["MOBA"],
            }),
          }
        );
  
        const resAction = await fetch(
          "https://tocfastapi.herokuapp.com/findByTag",
          {
            method: "POST",
            body: JSON.stringify({
              tag: ["Action"],
            }),
          }
        );

        const resHorror = await fetch(
          "https://tocfastapi.herokuapp.com/findByTag",
          {
            method: "POST",
            body: JSON.stringify({
              tag: ["Horror"],
            }),
          }
        );

        if (!res.ok || !resRPG.ok ) {
          throw new Error();
        }

        const responseData = await res.json();
        const responseRPG = await resRPG.json();
        const responseMOBA = await resMOBA.json();
        const responseAction = await resAction.json();
        const responseHorror = await resHorror.json();
        
        setData(responseData);
        setRPG(responseRPG);
        setMOBA(responseMOBA);
        setAction(responseAction);
        setHorror(responseHorror);

        setIsLoading(false);
      } catch {}
    };
    fetchData();
  }, []);

  return (
    <>
      {!isLoading && (
        <div>
          <div className="title-popgame">POPULAR GAMES</div>

          <div className="pop-game-box">
            <input
              type="radio"
              id="tabAll"
              name="pop-game-box"
              defaultChecked="checked"
            />
            <label
              htmlFor="tabAll"
              className="hover:underline underline-offset-8"
            >
              All
            </label>
            <div className="tab">
              <div className="flex flex-col gap-3 p-5">
                {data.map((e, index) => {
                  if (e.name !== "No data") {
                    return <PopularGameList {...e} index={index} key={e.id} />;
                  }
                })}
              </div>
            </div>

            <input type="radio" id="tabRPG" name="pop-game-box" />
            <label
              htmlFor="tabRPG"
              className="hover:underline underline-offset-8"
            >
              RPG
            </label>
            <div className="tab">
              <div className="flex flex-col gap-3 p-5">
                {RPG.map((e, index) => {
                  if (e.name !== "No data") {
                    return <PopularGameList {...e} index={index} key={e.id} />;
                  }
                })}
              </div>
            </div>

            <input type="radio" id="tabMOBA" name="pop-game-box"></input>
            <label
              htmlFor="tabMOBA"
              className="hover:underline underline-offset-8"
            >
              MOBA
            </label>
            <div className="tab">
            <div className="flex flex-col gap-3 p-5">
                {MOBA.map((e, index) => {
                  if (e.name !== "No data") {
                    return <PopularGameList {...e} index={index} key={e.id} />;
                  }
                })}
              </div>
            </div>

            <input type="radio" id="tabAction" name="pop-game-box"></input>
            <label
              htmlFor="tabAction"
              className="hover:underline underline-offset-8"
            >
              Action
            </label>
            <div className="tab">
            <div className="flex flex-col gap-3 p-5">
                {action.map((e, index) => {
                  if (e.name !== "No data") {
                    return <PopularGameList {...e} index={index} key={e.id} />;
                  }
                })}
              </div>
          
            </div>
            <input type="radio" id="tabHorror" name="pop-game-box"></input>
            <label
              htmlFor="tabHorror"
              className="hover:underline underline-offset-8"
            >
              Horror
            </label>
            <div className="tab">
            <div className="flex flex-col gap-3 p-5">
                {horror.map((e, index) => {
                  if (e.name !== "No data") {
                    return <PopularGameList {...e} index={index} key={e.id} />;
                  }
                })}
              </div>
            </div>
            <input type="radio" id="tab..." name="pop-game-box"></input>
            <label
              htmlFor="tab..."
              className="hover:underline underline-offset-8"
            >
              ...
            </label>
            <div className="tab">
              {/* <h2>this is on ... tab!!</h2> */}
              <div className="pgbs-container">
                {/* <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList />
            <PopularGameList /> */}
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
      )}
    </>
  );
}
