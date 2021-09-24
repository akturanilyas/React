import React from "react";

import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ktuLogo from "./assets/ktu_logo.png";
import Login from "./components/auth/login.js";
import SignUp from "./components/auth/signup.js";
import Home from "./components/home";

function App() {
    return (
        <div className="App row">
            <Router>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <div className="App row">
                        <div className="col container-sm">
                            <img src={ktuLogo} width="300" alt="" srcset=""></img>
                        </div>
                        <div className="auth-wrapper col">
                            <div className="auth-inner">
                                <Switch>
                                    <Route exact path="/" component={Login}/>
                                    <Route exact path="/sign-in" component={Login}/>
                                    <Route exact path="/sign-up" component={SignUp}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
