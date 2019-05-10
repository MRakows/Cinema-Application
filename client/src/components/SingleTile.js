import React from "react";
import "./SingleTile.css";

const SingleTile = props => {
  const mvs = props.film;
  let url = "https://image.tmdb.org/t/p/w200";

  const movies = mvs.map(i => (
    <div className="movie" key={i.id} title={i.title}>
      <img src={url + i.poster_path} alt={i.original_title} />
      <h1> {i.title}</h1>
    </div>
  ));
  return <div className="movieTile">{movies}</div>;
};

export default SingleTile;
