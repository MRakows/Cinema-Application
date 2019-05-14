import React from "react";
import { Link } from "react-router-dom";
import "./SingleTile.css";

const SingleTile = props => {
  console.log(props);
  const mvs = props.film;
  console.log(mvs);

  let url = "https://image.tmdb.org/t/p/w200";

  const movies = mvs.map(i => (
    <div className="movie" key={i.id} title={i.title}>
      <Link to={"/" + i.id}>
        <img src={url + i.poster_path} alt={i.original_title} />
        <p> {i.title}</p>
      </Link>
    </div>
  ));
  return <div className="movieTile">{movies}</div>;
};

export default SingleTile;
