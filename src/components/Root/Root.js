import React, {Component} from 'react';
import UserConsumer from "../../api/user_provider";
import {Route, BrowserRouter as Router, Switch, withRouter} from "react-router-dom";
import Home from "../Home/home";


class Root extends Component {

    logout(dispatch) {
        localStorage.removeItem("userId");
        dispatch({type: "REMOVE_ID"});
        this.props.history.push("/");
    }

    render() {
        return (
            <Router>
                <UserConsumer>
                    {value =>
                        <div>
                            {console.log(value.id)}
                            <h1>{value.id}</h1>
                            <button type="button" onClick={() => {
                                this.logout(value.dispatch);
                            }}>Logout!
                            </button>
                        </div>
                    }
                </UserConsumer>
                <Switch>
                    <Route exact path="/home"><Home/> </Route>
                    <Route exact path="/search"><Home/> </Route>
                    <Route exact path="/announcement"><Home/> </Route>
                    <Route exact path="/groups"><Home/> </Route>
                </Switch>
            </Router>
        );
    }
}

export default withRouter(Root);

// <UserConsumer>
//     {value =>
//         <div>
//             {console.log(value.id)}
//             <h1>{value.id}</h1>
//             <button type="button" onClick={()=> {
//                 this.logout(value.dispatch);
//             }}>Logout!</button>
//         </div>
//     }
// </UserConsumer>
