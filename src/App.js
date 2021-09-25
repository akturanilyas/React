import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Login from "./components/auth/login";
import Home from "./components/home/home";
import SignUp from "./components/auth/signup";


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Login/>
                    </Route>
                    <Route path="/auth/login" exact>
                        <Login/>
                    </Route>
                    <Route path="/auth/sign-up" exact>
                        <SignUp/>
                    </Route>
                    <Route path="/home" exact >
                        <Home/>
                    </Route>
                </Switch>
            </div>

        </Router>
    );
}

export default App;

