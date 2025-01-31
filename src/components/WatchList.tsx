import React from "react";
import "./css/watchList.css";
import MovieTile from "./microComponents/MovieTile";
import { kidsListArr, scaryListArr } from "./WatchList.constants";

const WatchList = () => {
  return (
    <div className={"Watch-List"}>
      <div className="Kids styled-scroll List-Scroll">
        <span>Kids Halloween Movies</span>
        {kidsListArr.map((movieStats) => {
          // uses the title as the key
          return <MovieTile movieStats={movieStats} key={movieStats.title} />;
        })}
      </div>
      <div className="Scary styled-scroll List-Scroll">
        <span>Scary Movie List</span>
        {scaryListArr.map((movieStats) => {
          // uses the title as the key
          return <MovieTile movieStats={movieStats} key={movieStats.title} />;
        })}
      </div>
    </div>
  );
};

export default WatchList;
