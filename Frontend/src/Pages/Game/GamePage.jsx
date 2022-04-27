import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GamePage(props) {
  const name = useParams().name;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://tocfastapi.herokuapp.com/findByName?name=${name}`,
  //         {
  //           method: "GET",
  //         }
  //       );

  //       if (!res.ok) {
  //         throw new Error();
  //       }

  //       const responseData = await res.json();

  //       setData(responseData);
  //       console.log(responseData)
  //       setIsLoading(false);
  //     } catch {}
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="my-16 mx-44 h-full ">
      <div className="flex flex-col h-[450px] ">
        <div className="flex pr-10  text-white text-5xl font-bold mb-5 h-full">
          Name
        </div>
        <div className="flex flex-co h-full gap-12 ">
          <div className="h-full">
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg?t=1651073529"
              className="h-full rounded-2xl object-cover"
            />
          </div>
          <div className="w-1/2 h-full">
            <div className="w-full bg-red-500 px-6 py-5 rounded-2xl">
              <div className="text-2xl text-white mb-2 ">Description</div>

              <div className="text-xl text-white indent-10 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                voluptatum eaque eum minus sed? Maiores ipsam similique nam
                eveniet quam, ea, eligendi, a distinctio harum accusamus labore!
                Quas, numquam? Cum perspiciatis ducimus laboriosam sed cumque
                obcaecati id. Nostrum ea atque repellat omnis beatae deserunt,
                incidunt in tenetur sapiente nihil. Architecto fugit odio
                commodi adipisci rerum eligendi repellat soluta ullam harum
                dicta natus obcaecati sunt totam nesciunt repellendus officiis
                quis sequi saepe voluptates, placeat autem nemo eius et? Nemo,
                repudiandae. Modi corrupti, commodi inventore accusamus nisi
                debitis ullam dolor doloremque error, obcaecati dolores
                provident totam earum. Ab dolor nobis enim fugit.
              </div>
            </div>

            <div className="text-white h-1/3 bg-yellow-500 px-6 py-5 ">
              TAG
            </div>
            <div className="flex flex-col w-full  h-full items-end text-white text-2xl">
              <div>Review</div>
              <div className="h-[100px] w-1/2 bg-sky-500 px-6 py-5 rounded-2xl">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
