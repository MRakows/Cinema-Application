import React from "react";
import { Link } from "react-router-dom";
import "./SingleTile.css";

const SingleTile = props => {
  const mvs = props.film;
  let url = "https://image.tmdb.org/t/p/w200";

  const movies = mvs.map(i => (
    <div className="movie" key={i.id} title={i.title}>
      <Link to={"/selected/" + i.id}>
        <img src={url + i.poster_path} alt={i.original_title} />
        <p> {i.title}</p>
      </Link>
    </div>
  ));
  return <div className="movieTile">{movies}</div>;
};

export default SingleTile;
