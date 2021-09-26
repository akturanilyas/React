import React, {Component} from "react";
import axios from "axios";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                email: "",
                password: "",
                fieldOfStudy: ""
            }
        };

        this.signUp = this.signUp.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStudyFieldChange = this.handleStudyFieldChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            user: {
                name: event.target.value,
                email: this.state.user.email,
                password: this.state.user.password,
                fieldOfStudy: this.state.user.fieldOfStudy,
            }
        });
        console.log(this.state.user.name);
    }

    handleEmailChange(event) {
        this.setState({
            user: {
                name: this.state.user.name,
                email: event.target.value,
                password: this.state.user.password,
                fieldOfStudy: this.state.user.fieldOfStudy,
            }
        });
    }

    handlePasswordChange(event) {
        this.setState({
            user: {
                name: this.state.user.name,
                email: this.state.user.email,
                password: event.target.value,
                fieldOfStudy: this.state.user.fieldOfStudy,
            }
        });
    }

    handleStudyFieldChange(event) {
        this.setState({
            user: {
                name: this.state.user.name,
                email: this.state.user.email,
                password: this.state.user.password,
                fieldOfStudy: event.target.value
            }
        });
    }

    signUp = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const response = await axios.post("http://127.0.0.1:3500/api/auth/register", this.state.user);
        //const response2 = await axios.get("http://127.0.0.1:3500/");

        console.log(response);
        console.log(process.env.REACT_APP_API_URL);

    }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input id="name" type="text" value={this.state.name}
                           className="form-control"
                           onChange={this.handleNameChange}
                           placeholder="Enter name"/>
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
                <div className="form-group">
                    <label>Field of study</label>
                    <input id="studyfield" type="text" className="form-control"
                           value={this.state.fieldOfStudy}
                           onChange={this.handleStudyFieldChange}
                           placeholder="Enter field of study"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={(e) => {
                    this.signUp(e)
                }}>Sign Up
                </button>
                <p className="forgot-password text-right">
                    Already registered <a href="/auth/login">sign in?</a>
                </p>
            </form>
        );
    }
}