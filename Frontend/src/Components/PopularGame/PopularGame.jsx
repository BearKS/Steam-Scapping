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
                className={`flex font-semibold w-[200px] h-[70px] items-center justify-center bg-gray-500 rounded-t-2xl border-x-2 border-t-2 border-[#18365C] text-white text-4xl hover:underline underline-offset-8 ${
                  e === tab ? "bg-[#C9C9C9] text-[#32415a]" : "bg-[#32415a] text-[#C9C9C9]"
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
                return <PopularGameList {...e} index={index} key={e.id} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
    // <div>
    //   <div className="title-popgame">POPULAR GAMES</div>

    //   <div className="pop-game-box ">
    //     <input
    //       type="radio"
    //       id="tabAll"
    //       name="pop-game-box"
    //       defaultChecked="checked"
    //     />
    //     <label
    //       htmlFor="tabAll"
    //       onClick={() => {
    //         fetchData(null);
    //       }}
    //       className="hover:underline underline-offset-8"
    //     >
    //       All
    //     </label>
    //     <div className="tab ">
    //       <div className="flex flex-col gap-3  p-5 h-full w-full ">
    // {isLoading && (
    //   <div className="flex justify-center items-center h-full w-full">
    //         <img
    //       className="rounded-full h-1/3 "
    //       src={loading}
    //       alt="Loading"
    //     />
    //   </div>
    // )}
    // {!isLoading && (
    //   <>
    //     {data.map((e, index) => {
    //       // if (e.name !== "No data") {
    //       return <PopularGameList {...e} index={index} key={e.id} />;
    //       // }
    //     })}
    //   </>
    // )}
    //       </div>
    //     </div>

    //     <input type="radio" id="tabRPG" name="pop-game-box" />
    //     <label
    //       htmlFor="tabRPG"
    //       className="hover:underline underline-offset-8"
    //       onClick={() => {
    //         fetchData("RPG");
    //       }}
    //     >
    //       RPG
    //     </label>
    //     <div className="tab">
    //       <div className="flex flex-col gap-3 p-5 h-full w-full">
    //         {isLoading && (
    //           <div className="flex justify-center items-center h-full w-full">
    //             {/* <svg
    //               role="status"
    //               class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
    //               viewBox="0 0 100 101"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
    //                 fill="currentColor"
    //               />
    //               <path
    //                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
    //                 fill="currentFill"
    //               />
    //             </svg> */}
    //             <img
    //               className="rounded-full h-1/3 "
    //               src={loading}
    //               alt="Loading"
    //             />
    //           </div>
    //         )}
    //         {!isLoading && (
    //           <>
    //             {data.map((e, index) => {
    //               // if (e.name !== "No data") {
    //               return <PopularGameList {...e} index={index} key={e.id} />;
    //               // }
    //             })}
    //           </>
    //         )}
    //       </div>
    //     </div>

    //     <input type="radio" id="tabMOBA" name="pop-game-box"></input>
    //     <label
    //       htmlFor="tabMOBA"
    //       className="hover:underline underline-offset-8"
    //       onClick={() => {
    //         fetchData("MOBA");
    //       }}
    //     >
    //       MOBA
    //     </label>
    //     <div className="tab">
    //       <div className="flex flex-col gap-3 p-5 h-full w-full">
    //         {isLoading && (
    //           <div className="flex justify-center items-center h-full w-full">
    //             {/* <svg
    //               role="status"
    //               class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
    //               viewBox="0 0 100 101"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
    //                 fill="currentColor"
    //               />
    //               <path
    //                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
    //                 fill="currentFill"
    //               />
    //             </svg>
    //              */}
    //             <img
    //               className="rounded-full h-1/3 "
    //               src={loading}
    //               alt="Loading"
    //             />
    //           </div>
    //         )}
    //         {!isLoading && (
    //           <>
    //             {data.map((e, index) => {
    //               // if (e.name !== "No data") {
    //               return <PopularGameList {...e} index={index} key={e.id} />;
    //               // }
    //             })}
    //           </>
    //         )}
    //       </div>
    //     </div>

    //     <input type="radio" id="tabAction" name="pop-game-box"></input>
    //     <label
    //       htmlFor="tabAction"
    //       className="hover:underline underline-offset-8"
    //       onClick={() => {
    //         fetchData("Action");
    //       }}
    //     >
    //       Action
    //     </label>
    //     <div className="tab">
    //       <div className="flex flex-col gap-3 p-5 h-full w-full">
    //         {isLoading && (
    //           <div className="flex justify-center items-center h-full w-full">
    //             {/* <svg
    //               role="status"
    //               class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
    //               viewBox="0 0 100 101"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
    //                 fill="currentColor"
    //               />
    //               <path
    //                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
    //                 fill="currentFill"
    //               />
    //             </svg> */}
    //             <img
    //               className="rounded-full h-1/3 "
    //               src={loading}
    //               alt="Loading"
    //             />
    //           </div>
    //         )}
    //         {!isLoading && (
    //           <>
    //             {data.map((e, index) => {
    //               // if (e.name !== "No data") {
    //               return <PopularGameList {...e} index={index} key={e.id} />;
    //               // }
    //             })}
    //           </>
    //         )}
    //       </div>
    //     </div>
    //     <input type="radio" id="tabHorror" name="pop-game-box"></input>
    //     <label
    //       htmlFor="tabHorror"
    //       className="hover:underline underline-offset-8"
    //       onClick={() => {
    //         fetchData("Horror");
    //       }}
    //     >
    //       Horror
    //     </label>
    //     <div className="tab">
    //       <div className="flex flex-col gap-3 p-5 h-full w-full">
    //         {isLoading && (
    //           <div className="flex justify-center items-center h-full w-full">
    //             {/* <svg
    //               role="status"
    //               class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
    //               viewBox="0 0 100 101"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
    //                 fill="currentColor"
    //               />
    //               <path
    //                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
    //                 fill="currentFill"
    //               />
    //             </svg> */}
    //             <img
    //               className="rounded-full h-1/3 "
    //               src={loading}
    //               alt="Loading"
    //             />
    //           </div>
    //         )}
    //         {!isLoading && (
    //           <>
    //             {data.map((e, index) => {
    //               // if (e.name !== "No data") {
    //               return <PopularGameList {...e} index={index} key={e.id} />;
    //               // }
    //             })}
    //           </>
    //         )}
    //       </div>
    //     </div>
    //     <input type="radio" id="tab..." name="pop-game-box"></input>
    //     <label
    //       htmlFor="tab..."
    //       className="hover:underline underline-offset-8"
    //       onClick={() => {
    //         fetchData("Sports");
    //       }}
    //     >
    //       Sports
    //     </label>
    //     <div className="tab">
    //       {/* <h2>this is on ... tab!!</h2> */}
    //       <div className="flex flex-col gap-3 p-5 h-full w-full">
    //         {isLoading && (
    //           <div className="flex justify-center items-center h-full w-full">
    //             {/* <svg
    //               role="status"
    //               class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
    //               viewBox="0 0 100 101"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
    //                 fill="currentColor"
    //               />
    //               <path
    //                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
    //                 fill="currentFill"
    //               />
    //             </svg> */}
    //             <img
    //               className="rounded-full h-1/3 "
    //               src={loading}
    //               alt="Loading"
    //             />
    //           </div>
    //         )}
    //         {!isLoading && (
    //           <>
    //             {data.map((e, index) => {
    //               // if (e.name !== "No data") {
    //               return <PopularGameList {...e} index={index} key={e.id} />;
    //               // }
    //             })}
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
