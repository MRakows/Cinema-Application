import React from "react";
import SingleTile from "./SingleTile";

const TilesList = props => {
  const movieList = props.movie.movie;

  return (
    <div>
      <SingleTile film={movieList} />
    </div>
  );
};

export default TilesList;
