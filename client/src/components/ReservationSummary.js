import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
        Reservation summary component
      </div>
    )
  }
}

export default withRouter(ReservationSummary);