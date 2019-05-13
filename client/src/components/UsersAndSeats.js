import React from 'react';

import Register from './Register';
import Login from './Login';
import Seats from './Seats';

class UsersAndSeats extends React.Component {
    state = {
        currentUserId: null,
        upperView: 'login',
        displaySeats: false,
        authSuccessful: false,
    }

    componentDidUpdate = () => {
        if(this.state.currentUserId) {
            if(!this.state.authSuccessful)
            this.setState({displaySeats: true, authSuccessful: true, upperView: 'welcome'})
        }
    }

    switchUserId = currentUserId => {
        this.setState({currentUserId});
    }

    switchView = upperView => {
        this.setState({upperView});
    }

    renderUpperView = () => {
        let upperV;
        switch(this.state.upperView) {
            case 'login':
                upperV = <Login switchUserId={this.switchUserId} switchView={this.switchView}/>
                break;
            case 'register':
                upperV = <Register switchUserId={this.switchUserId} switchView={this.switchView}/>
                break;
            case 'welcome':
                upperV = <div className="container" style={{height: "auto"}}><p>Welcome to the cinema</p><p>Your id: {this.state.currentUserId}</p></div>
                break;
            default:
                upperV = <div>Error</div>
        }

        return upperV;
    }

    renderLowerView = () => {
        let lowerV;
        if(this.state.displaySeats) {
            lowerV = <Seats userId={this.state.currentUserId} />
        }

        return lowerV;
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <div>{this.renderUpperView()}</div>
                <div>{this.renderLowerView()}</div>
            </div>
        )
    }
}

export default UsersAndSeats;