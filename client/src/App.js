import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import RegistrationConfirmation from "./components/RegistrationConfirmation";
import BasicTiles from "./components/BasicTiles";
import SelectedMovie from "./components/SelectedMovie";
import UsersAndSeats from "./components/UsersAndSeats";
import ReservationSummary from "./components/ReservationSummary";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={BasicTiles} />
          <Route path="/selected/:movie_id/" component={SelectedMovie} />
          <Route path="/:movie_id/confirmation" component={RegistrationConfirmation} />
          <Route path="/:movie_id/cinema" component={UsersAndSeats} />
          <Route path="/reservationSummary/:movie_id/:user_id/:seats_string" component={ReservationSummary}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
