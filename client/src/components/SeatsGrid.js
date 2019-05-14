import React, { Component } from 'react'

export default class SeatsGrid extends Component {
    //Component takes an array of taken seats' ids from 'takenSeats' prop
    //Component saves the ids of selected seats in 'selectedSeats' state property

    state = {
        selectedSeats: []
    }

    selectSeat = seatId => {
        this.setState(prevState => ({
            selectedSeats: [...prevState.selectedSeats, seatId]
        }));
    
    }

    deselectSeat = seatId => {
        this.setState(prevState => ({
            selectedSeats: prevState.selectedSeats.filter(selectedSeat => selectedSeat != seatId)
        }))
    }

    prepareSeats = () => {
        const squares = document.querySelectorAll('.seat > .square');
        const squaresArray = Array.from(squares);

        this.props.takenSeats.forEach(takenSeat => {
            squaresArray.forEach(square => {
                if(square.id === takenSeat) {
                    square.className = "square grey blocked"
                }
            })
        })
    }

    refreshSeats = () => {
        const squares = document.querySelectorAll('.seat > .square');
        const squaresArray = Array.from(squares);

         squaresArray.forEach(square => {
            if (!square.classList.contains("blocked")) {
                square.addEventListener("click", this.availableSeatClicked);
            }
            
        })

        squaresArray.forEach(square => {
            if(!this.state.selectedSeats.includes(square.id) && !square.classList.contains('blocked')) {
                square.className = "square white"
            }
        })

        this.state.selectedSeats.forEach(selectedSeat => {
            document.getElementById(selectedSeat).className = "square blue selected";
        })
    }

    availableSeatClicked = e => {
        e.stopPropagation();
        if(!e.target.classList.contains("selected")) {
            this.selectSeat(e.target.id);
        } else {
            this.deselectSeat(e.target.id);
        }
    }

    componentDidUpdate = () => {
        this.prepareSeats();
        this.refreshSeats();
        document.getElementById('amount').innerText = `${this.state.selectedSeats.length}`
    }

    render() {
        return (
            <div className="row">
                    <div className="col s12 seats-wrapper">
                        <div className="row seats-row">
                            <div className="col s1 blank">
                                <div className="square transparent"></div>
                            </div>
                            <div className="col s1 blank">
                                <div className="square transparent"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-1" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-2" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-3" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-4" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-5" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-6" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-7" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-8" className="square white"></div>
                            </div>
                            <div className="col s1 blank">
                                <div className="square transparent"></div>
                            </div>
                            <div className="col s1 blank">
                                <div className="square transparent"></div>
                            </div>
                        </div>
                        <div className="row seats-row">
                            <div className="col s1 seat">
                                <div id="st-9" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-10" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-11" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-12" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-13" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-14" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-15" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-16" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-17" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-18" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-19" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-20" className="square white"></div>
                            </div>
                        </div>
                        <div className="row seats-row">
                            <div className="col s1 seat">
                                <div id="st-21" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-22" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-23" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-24" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-25" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-26" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-27" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-28" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-29" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-30" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-31" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-32" className="square white"></div>
                            </div>
                        </div>
                        <div className="row seats-row">
                            <div className="col s1 seat">
                                <div id="st-33" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-34" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-35" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-36" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-37" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-38" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-39" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-40" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-41" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-42" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-43" className="square white"></div>
                            </div>
                            <div className="col s1 seat">
                                <div id="st-44" className="square white"></div>
                            </div>
                        </div>
                    </div>
            </div>
        )
  }
}
