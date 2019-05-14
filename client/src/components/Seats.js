import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import '../css/seats.css'
import SeatsGrid from './SeatsGrid';

class Seats extends Component {
    state = { takenSeats: [] }

    loadTakenSeats = async () => {
        axios.get(`https://localhost:3000/reservations/${this.props.match.params.movie_id}`)
            .then(response => {
                if(response.headers.found_any == "yes") {
                    let takenSeats = response.data.map(reservation => reservation.seatId)
                    this.setState({takenSeats})
                }
            })
            .catch(err => {
                this.forceUpdate();
            })
    }

    initCheckout = () => {
        let checkoutSuccessful = true;
        const squaresToReserve = document.querySelectorAll('.selected');
        const squaresToReserveArray = Array.from(squaresToReserve);
        if(squaresToReserveArray.length > 0) {
            const seatsToReserve = squaresToReserveArray.map(square => square.id);
            seatsToReserve.forEach(seat => {
                axios.post('https://localhost:3000/reservations', {
                        movieId: this.props.match.params.movie_id,
                        userId: this.props.userId,
                        seatId: seat
                    })
                    .then((response) => {
                        console.log('reservation-request sent properly');
                    })
                    .catch((err) => {
                        checkoutSuccessful = false;
                        console.log('reservation-request rejected');
                    })
            })

            if (checkoutSuccessful) {
                // REDIRECT THERE - checkout successful
                let seats_string = '';
                for(let i=0; i<seatsToReserve.length; i++) {
                    seats_string += seatsToReserve[i];
                    if(i !== seatsToReserve.length - 1) {
                        seats_string += '_'
                    }
                }
                this.props.history.push(`/reservationSummary/${this.props.match.params.movie_id}/${this.props.userId}/${seats_string}`);
            } else {
                // checkout unsuccessful
                console.log('Checkout unsuccessful :(');
                this.forceUpdate();
            }
        }
    }

    componentDidMount = () => {
        this.loadTakenSeats();
    }

    render() {
        return(
            (
                <div style={{paddingTop: "10px"}}>
                    <div className="row legend-row">
                        <div className="col s4 legend legend-1">
                            <div className="white" style={{ display: "inline-block", height: "0.8em", width: "0.8em", border: "1px solid black", borderRadius: "2px", marginRight: "5px" }}>
                            </div>
                            <span>
                                Available
                            </span>
                        </div>
                        <div className="col s3 legend legend-2">
                            <div className="grey" style={{ display: "inline-block", height: "0.8em", width: "0.8em", border: "1px solid black", borderRadius: "2px", marginRight: "5px" }}>
                            </div>
                            <span>
                                Taken
                            </span>
                        </div>
                        <div className="col s5 legend legend-3">
                            <div className="blue" style={{ display: "inline-block", height: "0.8em", width: "0.8em", border: "1px solid black", borderRadius: "2px", marginRight: "5px" }}>
                            </div>
                            <span>
                                Your selection
                            </span>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col s12 separator">
                                <div className="sep-line">
                                    <div className="divider"></div>
                                </div>
                                <div className="sep-or">
                                    <p className="grey-text text-lighten-2">SCREEN</p>
                                </div>
                                <div className="sep-line">
                                    <div className="divider"></div>
                                </div>
                            </div>
                    </div>
                        <SeatsGrid takenSeats={this.state.takenSeats} />
                        <div className="row grey darken-3" style={{marginBottom: "0px"}}>
                            <div className="col s12">
                                <div className="row" style={{marginBottom: "0px"}}>
                                    <div className="col s3"><p className="blue-text text-accent-1">Total</p><p id="amount" style={{fontSize: "1.5em", fontWeight: "bold"}} className="blue-text text-accent-1">0</p></div>
                                    <div className="col push-s3 s6" style={{paddingTop: "10px"}}><a onClick={this.initCheckout} className="btn waves-effect waves-light blue">Checkout</a></div>
                                </div>
                            </div>
                        </div>
                </div>
            )
        )
  }
}

export default withRouter(Seats);
