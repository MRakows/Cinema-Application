import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

import '../fontello/fontello-43381865/css/fontello.css'
import '../css/register.css'
import {User} from '../models/User'

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

        console.log('check');
    
        axios.post(`http://localhost:3000/${this.props.match.params.movie_id}/cinema/auth/sReg`, {
                email: email,
                password: password
            })
            .then((response) => {
                this.props.switchUserId(response.headers.userid)
            })
            .catch((err) => {
                console.log(err.response)
                this.setRegStatus(err.response.headers.regstatus)
            })


            // const userId = response.headers.userid;

            // if (!userId) {
            //     const regStatus = response.headers.regStatus;
            //     return this.setRegStatus(regStatus);
            // }

            // this.props.switchUserId(userId)
    }

    initFbRegister = () => {
        window.location.href = "/fb_auth"
    }


    render() {
        console.log(this.props);
        return(
            <div className="blue">
                <div className="container" style={{height: "auto", paddingTop: "10px"}}>
                    <div className="row" style={{marginBottom: "5px"}}>
                        <a onClick={this.initFbRegister} className="waves-effect waves-light btn col s10 push-s1 white black-text"><i className="icon-facebook-official left"/><span className="left" style={{fontWeight: "bold"}}>Register with Facebook</span></a>
                    </div>
                    <div className="row" style={{marginBottom: "5px"}}>
                        <a href="#" className="waves-effect waves-light btn col s10 push-s1 white black-text"><i className="icon-google left grey-text text-darken-4"/><span className="left" style={{fontWeight: "bold"}}>Register with Google</span></a>
                    </div>
                    <div className="row" style={{paddingTop: "10px"}}>
                        <div className="col s10 push-s1">
                            <div className="divider" style={{backgroundColor: "white"}}></div>
                        </div>
                    </div>
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
                            <a href="#" className="white-text"><p style={{textDecoration: "underline"}}>Back to login</p></a>
                        </div>
                        <div className="col s7 push-s1">
                            <p className="red-text text-accent-4" style={{fontWeight: "bold"}}>{this.state.regStatus}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;