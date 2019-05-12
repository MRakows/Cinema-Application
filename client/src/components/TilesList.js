import React from "react";
import SingleTile from "./SingleTile";

class TilesList extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor in TilesList')
  }

  render() {
    console.log('render in TilesList')
    return (
      <div>
        <SingleTile film={this.props.movie.movie} history={this.props.history}/>
      </div>
    );
  }
};

export default TilesList;
