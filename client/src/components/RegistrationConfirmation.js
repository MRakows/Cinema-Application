import "./RegistrationConfirmation.css";
import "../fontello/css/fontello.css";
import tmdb from "../apis/tmdb";
import React from "react";
import { Link } from "react-router-dom";

class RegistrationConfirmation extends React.Component {
  state = {
    id: null,
    movie: null
  };

  componentDidMount() {
    let id = this.props.match.params.movie_id;

    const movies = async () => {
      await tmdb
        .get(`/movie/${id}`)
        .then(res =>
          this.setState({
            id: id,
            movie: res.data
          })
        )
        .catch(error => console.log(error));
    };
    movies();
  }

  render() {
    if (this.state.movie) {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${
        this.state.movie.poster_path
      }`;
      return (
        <div className="container">
          <div className="confirmation">
            <h1>Hey, here are your tickets!</h1>
            <p>This is your order confirmation for {this.state.movie.title}.
            Please see the attached PDF for more details.</p>
            <img src={imageUrl} className="image-center" width="200px"/>
            <p>Location - Attendance Details will be sent to the
            buyer via email in the weeks before the experience.</p>
          </div>
        </div>
      );
    } else return null;
  }
}

export default RegistrationConfirmation;
