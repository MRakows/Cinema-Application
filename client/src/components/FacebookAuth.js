import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

export default class FacebookAuth extends Component {
 state = {
     isLoggedIn: false,
     userID: '',
     sentRequest: false
 }

 responseFacebook = response => {
    if(response.userID) {
        this.setState({
        isLoggedIn: true,
        userID: response.userID,
    })
    }
 }

 componentDidUpdate = () => {
     if(this.state.isLoggedIn) {
         if(!this.state.sentRequest) {
            this.props.authUserViaFb(this.state.userID);
            this.setState({sentRequest: true});
         }
     }
 }

render() {
    let fbContent;

    if(this.state.isLoggedIn) {
        fbContent = null;
    } else {
        fbContent = (
            <FacebookLogin
            appId="326245541406648"
            autoLoad={false}
            fields="email"
            callback={this.responseFacebook}
            render={renderProps => (
                <div onClick={renderProps.onClick} className="waves-effect waves-light btn col s10 push-s1 white black-text"><i className="icon-facebook-official left grey-text text-darken-4"/><span className="left" style={{fontWeight: "bold"}}>Log in with Facebook</span></div>
            )}
            />
        )
    }

    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
