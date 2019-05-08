import React from "react";

const SingleTile = props => {
  const mvs = props.film;
  let url = "https://image.tmdb.org/t/p/w200";

  const movies = mvs.map(i => (
    <div style={{ maxWidth: "300px" }} key={i.id} title={i.title}>
      <h1> {i.title}</h1>
      <img src={url + i.poster_path} alt={i.original_title} />
    </div>
  ));
  return <div style={{ display: "flex", flexWrap: "wrap" }}>{movies}</div>;
};

export default SingleTile;
