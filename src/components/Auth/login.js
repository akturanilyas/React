import React, {Component} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {withRouter} from "react-router-dom";
import UserConsumer from "../../api/user_provider";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
            user: {
                email: "",
                password: "",
            }
        };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            user: {
                email: event.target.value,
                password: this.state.user.password,
            }
        });
    }

    handlePasswordChange(event) {
        this.setState({
            user: {
                email: this.state.user.email,
                password: event.target.value,
            }
        });
    }

    async handleLoginClick(e,dispatch) {
        e.preventDefault();
        const response = await axios.post("http://127.0.0.1:3500/api/auth/login",
            this.state.user);
        console.log(response.data['token']);
        let decoded = jwt_decode(response.data['token']);
        localStorage.setItem("userId", decoded['id']);

        console.log(localStorage.getItem("userId"));
        dispatch({type:"SET_ID",payload:decoded['id']})
        this.isSignedIn();

    }

    isSignedIn() {
        if (localStorage.getItem("userId") !== null) {
            this.props.history.push("/home");
            // We can push state like under this line command
            // this.props.history.push("/dashboard", { state: 'sample data'});
        }
    }

    componentDidMount() {
        this.isSignedIn();
    }

    render() {
        return (
            <UserConsumer>
                {
                    value =>
                        <form>
                            <h3>Sign In</h3>
                            <div className="form-group">
                                <label style={{visibility: this.state.visibility ? "visible" : "hidden"}}> Email or
                                    password
                                    wrong </label>
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input id="email" type="text" className="form-control"
                                       value={this.state.email}
                                       onChange={this.handleEmailChange}
                                       placeholder="Enter email"/>
                            </div>
                            <div id="password" className="form-group">
                                <label>Password</label>
                                <input id="password" type="password" className="form-control"
                                       value={this.state.password}
                                       onChange={this.handlePasswordChange}
                                       placeholder="Enter password"/>
                            </div>
                            <button onClick={(e) => {
                                this.handleLoginClick(e,value.dispatch)

                            }} className="btn btn-primary btn-block">Submit
                            </button>
                            <p className="forgot-password text-right">
                                I don't have account <a href="/auth/sign-up">Sign Up</a>
                            </p>
                        </form>}
            </UserConsumer>
        );
    }
}

export default withRouter(Login);