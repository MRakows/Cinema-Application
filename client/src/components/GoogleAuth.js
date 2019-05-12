import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

export default class GoogleAuth extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        sentRequest: false
    }

    responseGoogle = response => {
        if (response.googleId) {
            this.setState({
                isLoggedIn: true,
                userID: response.googleId,
            })
        }
    }

    componentDidUpdate = () => {
     if(this.state.isLoggedIn) {
         if(!this.state.sentRequest) {
            this.props.authUserViaGoogle(this.state.userID);
            this.setState({sentRequest: true});
         }
     }
 }

    render() {
    let googleContent;

    if(this.state.isLoggedIn) {
        googleContent = null;
    } else {
        googleContent = (
            <GoogleLogin
            clientId = "22992801402-85npreq2fvhibvotnqnh4va5kvjpb4sr.apps.googleusercontent.com"
            render={renderProps => (
                <div onClick={renderProps.onClick} className="waves-effect waves-light btn col s10 push-s1 white black-text"><i className="icon-google left grey-text text-darken-4"/><span className="left" style={{fontWeight: "bold"}}>Log in with Google</span></div>
            )}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        )
    }

    return (
      <div>
        {googleContent}
      </div>
    )
  }
}
