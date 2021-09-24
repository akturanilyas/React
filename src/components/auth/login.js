import React, {Component} from "react";
import axios from "axios";

export default class Login extends Component {
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

    async handleLoginClick(e) {
        e.preventDefault();
        //this.setState({visibility: true});
        const response = await axios.post("http://127.0.0.1:3500/api/auth/login",
            this.state.user);
        console.log(response.data);
        console.log("heyheyhey");
    }

    render() {

        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label style={{visibility: this.state.visibility ? "visible" : "hidden"}}> Email or password
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
                    this.handleLoginClick(e)
                }} className="btn btn-primary btn-block">Submit
                </button>
                <p className="forgot-password text-right">
                    I don't have account <a href="/sign-up">Sign Up</a>
                </p>
            </form>
        );
    }
}
