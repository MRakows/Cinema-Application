import React, { Component } from "react";
import tmdb from "../apis/tmdb";

class BasicTiles extends Component {
  state = { movie: [] };

  componentDidMount() {
    const movies = async () => {
      await tmdb
        .get("/discover/movie?")
        .then(res => this.setState({ movie: res.data.results }))
        .catch(error => console.log(error));
    };
    movies();
  }
  componentDidUpdate() {
    console.log(this.state.movie);
  }
  render() {
    return (
      <div>
        <div>Nav</div>
        <div>List</div>
      </div>
    );
  }
}

export default BasicTiles;
