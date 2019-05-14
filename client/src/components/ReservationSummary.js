import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import tmdb from "../apis/tmdb";
import axios from 'axios';

class ReservationSummary extends Component {
    state = {
        movieId: '', // <-- id wybranego filmu, po tym pewnie da się ściągnąć jego obrazek z api przez axiosa
        userId: '', // <-- id użytkownika
        seats: [] // <-- zarezerwowane siedzenia, można wrzucić do potwierdzenia rezerwacji
    }

    componentDidMount() {
        let seats = this.props.match.params.seats_string.split('_');
        this.setState({movieId: this.props.match.params.movie_id, userId: this.props.match.params.user_id, seats})
    }

    render() {
        // console.log(this.state);
    return (
      <div>
      <div class="ui grey card">
        <div class="content">
          <div class="header"></div>
        </div>
        <div class="content">
          <h4 class="ui sub header">Hey dawn, here are your tickets!</h4>
          <div class="ui small feed">
            <div class="event">
              <div class="content">
                <div class="summary">
                  This is your order confirmation for <a><h6>29 Mar 2018 - Nazwa filmu.</h6></a> Have a nive show!
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <a>Obrazek</a>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  You have booked the following places: <a><h6>{this.state.seats.map(a => a + " ")}</h6></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default withRouter(ReservationSummary);