import React, {useContext} from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Login from "./components/Auth/login";
import Home from "./components/Home/home";
import SignUp from "./components/Auth/signup";
import Navbar from "./components/Navbar/navbar";
import { UserContext} from "./api/user_provider";
import Search from "./components/Search/search";
import Announcement from "./components/Announcement/announcement";
import Groups from "./components/Groups/groups";


function App() {
    const {jwt} = useContext(UserContext);
    const signedIn = (<Router>
        <div>
            <div className={"container-fluid"}>
                <Navbar/>
                <Switch>
                    <Route exact path="/home"><Home/> </Route>
                    <Route exact path="/search"><Search/> </Route>
                    <Route exact path="/announcement"><Announcement/> </Route>
                    <Route exact path="/groups"><Groups/> </Route>
                    <Route path="/home/1" exact>
                        1
                    </Route>
                    <Route path="/home/2" exact>
                        2
                    </Route>
                    <Route exact={true}>
                        not found
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>);

    const unSigned =
        (<Router>
            <Switch>
            <Route exact path="/auth/login"><Login/> </Route>
            <Route exact path="/auth/sign-up"><SignUp/> </Route>
            <Route exact path="*"><Login/> </Route>
            </Switch>
        </Router>)

    if (jwt === "" || jwt == null) {
        return unSigned;
    }
    return signedIn;
}

export default App;

