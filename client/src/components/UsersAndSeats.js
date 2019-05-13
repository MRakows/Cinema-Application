import React from 'react';

import Register from './Register';
import Login from './Login';

class UsersAndSeats extends React.Component {
    state = {
        currentUserId: null,
        upperView: 'login'
    }

    switchState = (currentUserId, upperView) => {
        this.setState({currentUserId, upperView});
    }

    renderUpperView = () => {
        let upperV;
        switch(this.state.upperView) {
            case 'login':
                upperV = <Login switchState={this.switchState}/>
                break;
            case 'register':
                upperV = <Register switchState={this.switchState}/>
                break;
            case 'welcome':
                upperV = <div className="container"><p>Welcome to the cinema</p><p>Your id: {this.state.currentUserId}</p></div>
                break;
            default:
                upperV = <div>Error</div>
        }

        return upperV;
    }

    render() {
        console.log(this.state.currentUserId)
        return(
            <div>
                {this.renderUpperView()}
                <p>Seats</p>
            </div>
        )
    }
}

export default UsersAndSeats;