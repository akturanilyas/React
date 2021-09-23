import React, { Component } from "react";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = { visibility: false };
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.setState({ visibility: true });
    console.log(this.state.isLoggedIn);

  }

  render() {

    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label style={{ visibility: this.state.visibility ? "visible" : "hidden" }}> Email or password wrong </label>
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button onClick={(e) => { this.handleLoginClick(e) }} className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
          I don't have account <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    );
  }
}
