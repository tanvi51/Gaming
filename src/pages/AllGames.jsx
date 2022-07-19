import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import NavBar from "../components/NavBar";
import SearchIcon from "@mui/icons-material/Search";

const AllGames = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["title", "platform", "genre"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  const FetchApi = () => {
    fetch(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`
    )
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
        setIsLoaded(true);
        console.log(actualData);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  };
  useEffect(() => {
    FetchApi();
  }, []);

  function search(data) {
    return data.filter((item) => {
      if (item.region === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>Loading..</>;
  } else {
    return (
      <>
        <NavBar />
        <div className="flex flex-col md:flex md:flex-row items-center justify-center py-8 rounded-full">
          
          <input
            className="w-9/12 py-2 px-4 rounded-full outline-black"
            type="text"
            placeholder="Search here..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <SearchIcon className="text-grey" />
          <select
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
            className="py-2 px-4 rounded-full mx-4"
            aria-label="Filter Countries By Countries"
          >
            <option value="All">Filter By platforms</option>
            {data.map((item) => (
              <option>{item.platform}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 py-10 px-4 justify-items-center">
          {/*search(data)*/}{" "}
          {data.map((data) => (
            <GameCard
              editors_choice={data.editors_choice}
              genre={data.genre}
              platform={data.platform}
              title={data.title}
              score={data.score}
            />
          ))}
        </div>
      </>
    );
  }
};

export default AllGames;
