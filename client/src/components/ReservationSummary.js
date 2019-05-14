import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import tmdb from "../apis/tmdb";
import axios from 'axios';
import BackButton from './BackButton';

class ReservationSummary extends Component {
    state = {
        movieId: '', // <-- id wybranego filmu, po tym pewnie da się ściągnąć jego obrazek z api przez axiosa
        userId: '', // <-- id użytkownika
        seats: [], // <-- zarezerwowane siedzenia, można wrzucić do potwierdzenia rezerwacji
        movieImg: '',
        movieTitle: '',
        dataFetched: false
    }

    componentDidMount() {
        let seats = this.props.match.params.seats_string.split('_');
        this.setState({movieId: this.props.match.params.movie_id, userId: this.props.match.params.user_id, seats})
    }

    setMovieData = (src, title, status) => {
      this.setState({movieImg: src, movieTitle: title, dataFetched: status});
    }

    

    getFilmData = async () => {
      await axios.get(`https://api.themoviedb.org/3/movie/${this.state.movieId}`, {
        params: {
          api_key: "7cf378841a0fdaf1e6f5f4743fe5406f",
          language: "en-US",
        }
      })
      .then(res => {
        let src = res.data.poster_path;
        let title = res.data.title;
        if(!this.state.dataFetched) this.setMovieData(`https://image.tmdb.org/t/p/w200/${src}`, title, true);
      })
      .catch(err => {
        console.log('fail');
      })
    }

    componentDidUpdate() {
      this.getFilmData();
    }

    render() {
      let currentDate = new Date();
      let dateToDisplay = "";
      dateToDisplay += currentDate.getDate() >= 10 ? currentDate.getDate() : "0" + currentDate.getDate;
      dateToDisplay += "/";
      dateToDisplay += currentDate.getMonth()+1 >=10 ? (currentDate.getMonth()+1) : "0" + (currentDate.getMonth()+1);
      dateToDisplay += "/";
      dateToDisplay += currentDate.getFullYear();

      console.log(this.state)
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-image">
                  <img src={this.state.movieImg || 'https://rethinkresearch.biz/wp-content/uploads/2018/10/frequentation-salles-cinema-cesse-daugmenter-atteint-20112156-millions-dentrees_0_729_486.jpg'} style={{filter: "brightness(33%)"}}></img>
                  <span className="card-title">Reservation summary</span>
                </div>
                <div className="card-content">
                  <p style={{fontWeight: "bold"}}>Reservation successful, {this.state.seats.length} {this.state.seats.length > 1 ? "seats are " : "seat is "}waiting for you!</p>
                  <p style={{fontWeight: "lighter"}}>This is your order confirmation for {dateToDisplay}, {this.state.movieTitle || "-"}.</p>
                  <p style={{fontWeight: "lighter"}}>Please see the attached PDF for more details. <br/>
                  
                  Date of the show: Saturday, Jun 16 7:00pm. <br/>
                  Coderscamp Cinema, Wrocław</p>
                </div>
                <div className="card-action right-align">
                  <a className="btn waves-effect waves-light blue white-text" href="#">→ Coderscamp Cinema</a>
                </div>
              </div>
            </div>
          </div>
          <BackButton />
        </div>
      </div>
    )
  }
}

export default withRouter(ReservationSummary);