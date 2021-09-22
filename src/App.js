import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ktuLogo from "./assets/ktu_logo.png";
import Login from "./components/auth/login.js";
import SignUp from "./components/auth/signup.js";

function App() {
return (
<Router>
  <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="auth-wrapper">
       <div className="col container-sm" style={{backgroundColor:"red"}}>
          <img src={ktuLogo}  width="500" alt="" srcset=""></img>
        </div> 
      <div className="auth-inner ">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </div>
    </div>
  </div>
</Router>
);
}

export default App;