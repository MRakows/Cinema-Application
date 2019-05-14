import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class BackButton extends Component {
    // goBack = () => {
    //     this.props.history.push('/');
    // }

    render() {
    return (
      <div className="row">
        <div className="col s12 btn waves-effect waves-light black">
            <Link to="/" className="white-text">Back to movies list</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(BackButton)