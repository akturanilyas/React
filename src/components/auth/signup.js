import React, { Component } from "react";
import axios from 'axios'
import $ from "jquery";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
  }

  signUp = async (e) => {
    e.preventDefault();
    // var name = $('#name').val();
    // var studyField = $('#studyfield').val();
    // var email = $('#email').val();
    // var password = $('#password').val();


    const response = await axios.get("http://127.0.0.1:3500/");
    console.log(response);
    // console.log(process.env.REACT_APP_API_URL);
  }

  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Name</label>
          <input id="name" type="text" className="form-control" placeholder="Enter name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input id="email" type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Field of study</label>
          <input id="studyfield" type="text" className="form-control" placeholder="Enter field of study" />
        </div>

        <div id="password" className="form-group">
          <label>Password</label>
          <input id="password" type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={(e) => { this.signUp(e) }}>Sign Up</button>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}