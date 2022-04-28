import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../../Components/Tag/Tag";

export default function GameCard(props) {
  const gamename = useParams().name;
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://tocfastapi.herokuapp.com/findByName?name=${gamename}`,
          {
            method: "GET",
          }
        );

        if (!res.ok) {
          throw new Error();
        }

        const responseData = await res.json();

        setData(responseData[0]);
        console.log(responseData[0]);
        console.log(data.name)
        setIsLoading(false);
      } catch {}
    };
    fetchData();
  }, []);
  return (
    <div className="px-4">
      <h1 className="py-4 text-2xl font-bold text-white">{data.name}</h1>
      <div className="grid grid-cols-8 gap-4 pb-8">
        <div class="col-span-3">
          <img src={data.cover_url} className="rounded-md" alt="" />
        </div>
        <div class="col-span-4">
          <h1 className="font-bold text-white">Description</h1>
          <h1 className="mt-4 text-sm text-white">{data.description}</h1>
          <div className="grid grid-cols-8 mt-2">
            <div class="col-span-6">
              <div className="flex flex-wrap">
              {data.tag.map((e) => {
                return (
                  <div>
                    <Tag text={e} key={e} />
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-5 pb-8">
        <div class="col-span-5 bg-white"></div>
        <div class="col-span-2">
          <h1 className="font-bold text-white">Review</h1>
          <div className="flex justify-center p-4 mt-2 space-x-10 bg-white rounded-md">
            <div className="flex flex-row items-center p-4 space-x-10">
              <h1 className="text-2xl font-bold text-green-700">{data.review}</h1>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div> 
  );
}
