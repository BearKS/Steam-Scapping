import { useState } from "react";
import "./populargamelist.css";
import Tag from "../../Components/Tag/Tag";
import star from "../../star-full.svg";
import { useNavigate } from "react-router-dom";

export default function PopularGameList(props) {
  // export default function PopularGameList(props) {
  // const { game } = props;

  {
    /* <div key={game._id} className='game-list-container'></div> */
  }
  // <div href={`/$(game??._id)`}></div>
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/Game/${props.name}`);
  };

  // console.log(props.tags);
  let tag = props.tag.slice(0, 7);
  // let review = "";
  // if (props.review.includes("Overwhelmingly")) {
  //   let temp = "";
  //   review = props.review.split(" ");
  // } else {
  //   review = props.review;
  // }

  let name = "";
  if (props.name.includes("&amp;")) {
    name = props.name.replace("&amp;", "&");
  } else {
    name = props.name;
  }

  return (
    // <div className="game-list-container " onClick={onClickHandler}>
    //   <div className="game-list-box rounded-lg hover:border-[3px] border-amber-400 cursor-grab">
    //     <div className="roww">
    //       <div className="col1">
    //         <img
    //           className="img-game"
    //           src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1641233427"
    //         />
    //       </div>

    //       <div className="col2">
    //         <div className="name-col2">
    //           <div className="game-name">{props.name}</div>
    //         </div>

    //         <div className="tag-col2">
    //           {/* {props.tags.map((e) => {
    //             <Tag  props = {e} />;
    //           })} */}

    //         </div>
    //       </div>

    //       <div className="col3" />
    //       <img className="rating-pic" src={star}></img>
    //       <div className="rating-input">4.8</div>
    //       <div className="rating-fullpoint">/5</div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex h-[140px] w-full" onClick={onClickHandler}>
      <div className="h-full w-[50px] text-3xl font-semibold flex items-center justify-center pl-1 pr-4 ">
        {props.index + 1}.
      </div>
      <div className="h-full w-full bg-[#C9C9C9] p-3 rounded-xl hover:border-[3px] border-amber-400">
        <div className="flex h-full">
          <img
            className="h-full object-cover w-[210px] rounded-xl"
            src={props.cover_url}
          />
          <div className="flex flex-col w-[575px] ml-2 pl-3 h-full ">
            <div className="flex h-full w-full h-1/4 ">
              <div className=" font-bold text-[25px] ">{name}</div>
            </div>

            <div className="flex my-5 h-3/4 flex-wrap ">
              {tag.map((e) => {
                return (
                  <div>
                    <Tag text={e} key={e} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center text-left text-2xl font-[500]">
            <svg
              className="h-8 w-8 text-yellow-500  fill-yellow-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
        
                {props.review.includes("Positive") && (
                  <div className="text-lime-700">{props.review}</div>
                )}
                {props.review.includes("Mixed") && (
                  <div className="text-orange-500">{props.review}</div>
                )}
                {props.review.includes("Negative") && (
                  <div className="text-red-700">{props.review}</div>
                )}
         
          </div>
        </div>
      </div>
    </div>
  );
}
