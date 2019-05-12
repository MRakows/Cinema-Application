import React from "react";
import "./SingleTile.css";

class SingleTile extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor in SingleTile')
    // this.mvs = props.film
    this.url = "https://image.tmdb.org/t/p/w200"
  }

  componentDidMount() {
    console.log('componentDidMount in SingleTile')
    // this.mvs = this.props.film;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate in SingleTile')
    // this.mvs = this.props.film;
  }
  componentDidUpdate() {
    console.log('componentDidUpdate in SingleTile')
    // this.mvs = this.props.film;
  }

  movies() {
    console.log('movies in SingleTile')
    // console.log(this.props.film)
    return this.props.film.map(i => (
      <div className="movie" key={i.id} title={i.title} onClick={() => {console.log(this.props); this.props.history.push(`selected/${i.id}`) }}>
        <img src={this.url + i.poster_path} alt={i.original_title} />
        <h1> {i.title}</h1>
      </div>
    ));
  }

  render() {
    console.log('render in SingleTile')
    // console.log(this.mvs)
    return <div className="movieTile">{this.movies()}</div>;
  }
};

export default SingleTile;
