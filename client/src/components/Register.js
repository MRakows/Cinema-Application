import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import '../fontello/fontello-43381865/css/fontello.css'
import '../css/register.css'
import FacebookAuth from './FacebookAuth';
import GoogleAuth from './GoogleAuth';

class Register extends React.Component {
    state = {
        regStatus: ""
    }

    setRegStatus = (regStatus) => {
        this.setState({ regStatus })
    }

    initRegister = async e => {
        e.preventDefault();
        const email = document.querySelector('#reg_email').value
        const password = document.querySelector('#reg_password').value

        axios.post(`https://localhost:3000/${this.props.match.params.movie_id}/cinema/auth/sReg`, {
                email: email,
                password: password
            })
            .then((response) => {
                this.props.switchUserId(response.headers.userid)
            })
            .catch((err) => {
                this.setRegStatus(err.response.headers.regstatus)
            })
    }

    authUserViaFb = fbID => {
        axios.post('https://localhost:3000/fb_auth', {
            fbID: fbID
        })
        .then((response) => {
            this.props.switchUserId(response.headers.userid)
        })
            .catch((err) => {
            this.setRegStatus(err.response.headers.regstatus)
        })
    }

    authUserViaGoogle = googleID => {
        axios.post('https://localhost:3000/google_auth', {
            googleID: googleID
        })
        .then((response) => {
            this.props.switchUserId(response.headers.userid)
        })
            .catch((err) => {
            this.setRegStatus(err.response.headers.regstatus)
        })
    }
    
    switchToLogin = () => {
        this.props.switchView('login');
    }

    render() {
        return(
            <div className="blue">
                <div className="container" style={{height: "auto", paddingTop: "10px", paddingBottom: "10px"}}>
                    {/* <div className="row" style={{marginBottom: "5px"}}>
                        <FacebookAuth authUserViaFb={this.authUserViaFb}/>
                    </div>
                    <div className="row" style={{marginBottom: "5px"}}>
                        <GoogleAuth authUserViaGoogle={this.authUserViaGoogle}/>
                    </div>
                    <div className="row" style={{paddingTop: "10px"}}>
                        <div className="col s10 push-s1">
                            <div className="divider" style={{backgroundColor: "white"}}></div>
                        </div>
                    </div> */}
                    <div className="row">
                        <form className="col s10 push-s1" onSubmit={this.initRegister}>
                            <div className="row" style={{marginBottom: "5px"}}>
                                <div className="input-field col s12" style={{marginTop: "0.2rem", marginBottom: "0.2rem"}}>
                                    <input id="reg_email" type="email" name="email" placeholder="Email" className="white-text"/>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "5px"}}>
                                <div className="input-field col s12" style={{marginTop: "0.2rem", marginBottom: "0.2rem"}}>
                                    <input id="reg_password" type="password" name="password" placeholder="Password" className="white-text"/>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "5px"}}>
                                <input type="submit" value="register" className="col s12 btn waves-effect waves-light white black-text"></input>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col s3 push-s1">
                            <a onClick={this.switchToLogin}><p style={{textDecoration: "underline"}} className="white-text">Back to login</p></a>
                        </div>
                        <div className="col s7 push-s1">
                            <p className="amber-text" style={{fontWeight: "bold"}}>{this.state.regStatus}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);