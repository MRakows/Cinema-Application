import React, { Component } from "react";
import tmdb from "../apis/tmdb";
import TilesList from "./TilesList";

class BasicTiles extends Component {
  state = { movie: [] };

  componentDidMount() {
    console.log('componentDidMount in BasicTiles')
    const movies = async () => {
      await tmdb
        .get("/discover/movie?")
        .then(res => this.setState({ movie: res.data.results }))
        .catch(error => console.log(error));
    };
    movies();
  }

  componentWillUpdate() {
    console.log('componentWillUpdate in BasicTiles')
    console.log(this.state.movie);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate in BasicTiles')
    console.log(this.state.movie);
  }

  render() {
    console.log('render in BasicTiles')
    return (
      <div>
        <div>Nav</div>
        <TilesList movie={this.state} history={this.props.history}/>
      </div>
    );
  }
}

export default BasicTiles;
