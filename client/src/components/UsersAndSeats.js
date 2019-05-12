import React from 'react';

import Register from './Register'

class UsersAndSeats extends React.Component {
    state = {
        currentUserId: null
    }

    switchUserId = userId => {
        this.setState({currentUserId: userId});
    }

    render() {
        console.log(this.state.currentUserId)
        return(
            <div>
                <Register switchUserId={this.switchUserId}/>
                <p>Seats</p>
            </div>
        )
    }
}

export default UsersAndSeats;