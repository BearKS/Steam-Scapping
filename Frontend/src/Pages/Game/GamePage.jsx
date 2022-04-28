import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../../Components/Tag/Tag";
import loading from "../../Assets/Meat507.gif";
import review_icon from "../../Assets/review.png";
import des_icon from "../../Assets/descript.png";
import publish from "../../Assets/publish.png";
import dev from "../../Assets/dev.png";
import play from "../../Assets/play.png";

export default function GamePage(props) {
  const name = useParams().name;

  useEffect(() => {
    fetchData();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "",
    review: "",
    tag: [],
    developer: "",
    publisher: "",
    url: "",
    cover_url: "",
    nowPlaying: "",
    dayPeak: "",
  });

  const fetchData = async () => {
    const res = await fetch(
      `https://tocfastapi.herokuapp.com/findByName?name=${name}`,
      {
        method: "GET",
      }
    );
    let json = await res.json();
    await setData({
      id: json[0].id,
      name: json[0].name,
      description: json[0].description,
      review: json[0].review,
      tag: json[0].tag,
      developer: json[0].developer,
      publisher: json[0].publisher,
      url: json[0].url,
      cover_url: json[0].cover_url,
      nowPlaying: json[0].nowPlaying,
      dayPeak: json[0].dayPeak,
    });
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="flex text-center h-[80vh] w-full justify-center items-center">
          <img
            className="rounded-full w-60 h-60 "
            src={loading}
            alt="Loading"
          />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col w-full h-full p-32 pt-12 place-items-center">
          <div className="flex flex-col w-full h-full">
            <div className="flex  text-white text-5xl font-bold font-link pb-8">
              {data.name}
            </div>
            <div className="flex flex-row h-full gap-12 w-full">
              <div className="flex flex-col h-full gap-6">
                <div className="h-[350px] w-auto">
                  <img
                    src={data.cover_url}
                    className="h-full rounded-2xl object-cover"
                  />
                </div>

                <div className="inline-flex gap-5">
                  <div className="bg-[#132845] h-[100px] px-6 py-5 rounded-sm text-white font-link text-2xl">
                    <div className="flex items-center">
                      <img src={dev} className="w-[35px] h-[35px] pr-1" />{" "}
                      <h1>Developer : {data.developer}</h1>
                    </div>

                    <div className="flex items-center ">
                      <img src={publish} className="w-[35px] h-[35px] pr-1" />
                      <h1>Publisher : {data.publisher}</h1>
                    </div>
                  </div>
                  {/* <div className="bg-gray-400 h-1/4 px-6 py-5 rounded-2xl text-white font-link"> */}

                  {/* </div> */}
                </div>

                <div className="bg-[#132845] h-1/4 px-6 py-5 rounded-sm text-white text-[#00bdde] ">
                  <a href={data.url} target="_blank">
                    <h3 className="underline-offset-1">
                      See more : {data.url}
                    </h3>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-1/2 h-1/2">
                <div className="w-full ">
                  <div className="flex text-4xl font-bold text-white font-link pb-5 items-center">
                    Description
                    <img src={des_icon} className="w-[35px] h-[35px] pl-1" />
                  </div>

                  <div className="text-xl text-[#18365C] font-semibold indent-10 text-justify bg-gray-200 px-6 py-5 rounded-2xl font-link mb-5">
                    {data.description}
                  </div>
                </div>

                <div className="flex flex-wrap ">
                  {data.tag.map((e) => {
                    return (
                      <div>
                        <Tag text={e} key={e} />
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col-2 w-full mt-12 h-full text-white text-2xl gap-5 font-link">
                  <div className="flex flex-col w-full ml-3">
                    <div className="flex items-center text-4xl font-semibold pb-3">
                      Now Playing
                      <img src={play} className="w-[35px] h-[35px] pl-1" />
                    </div>
                    <div className="flex flex-col h-[100px]  bg-[#18365C]  rounded-2xl justify-center items-between font-link">
                      <h1>PEAK TODAY : {data.dayPeak}</h1>
                      <h1>CURRENT PLAYERS : {data.nowPlaying}</h1>
                    </div>
                  </div>

                  <div className="flex flex-col w-full font-link rounded-xl">
                    <div className="flex items-center text-4xl font-semibold pb-3">
                      Review
                      <img
                        src={review_icon}
                        className="w-[35px] h-[35px] pl-1"
                      />
                    </div>
                    {/* <div className="flex h-[100px]  text-white px-6 py-5 rounded-2xl justify-center items-center font-bold text-4xl "> */}
                    {data.review.includes("Positive") && (
                      <div className="bg-lime-500 flex h-[100px]  text-white px-6 py-5 rounded-2xl justify-center items-center font-bold text-3xl text-center">
                        {data.review}
                      </div>
                    )}
                    {data.review.includes("Mixed") && (
                      <div className="bg-orange-500 flex h-[100px]  text-white px-6 py-5 rounded-2xl justify-center items-center font-bold text-3xl text-center">{data.review}</div>
                    )}
                    {data.review.includes("Negative") && (
                      <div className="bg-red-700 flex h-[100px]  text-white px-6 py-5 rounded-2xl justify-center items-center font-bold text-3xl text-center">{data.review}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
