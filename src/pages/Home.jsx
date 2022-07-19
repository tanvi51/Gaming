import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const FetchApi = () => {
    fetch(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`
    )
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  };
  useEffect(() => {
    FetchApi();
  }, []);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>Loading..</>;
  } else {
    return (
      <div>
        <NavBar />
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 py-10 px-4 justify-items-center">
          {data.slice(1, 22).map((data) => (
            <GameCard
              editors_choice={data.editors_choice}
              genre={data.genre}
              platform={data.platform}
              title={data.title}
              score={data.score}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
