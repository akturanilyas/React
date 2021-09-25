import React, {Component} from 'react';
import UserConsumer from "../../api/user_provider";
import {withRouter} from "react-router-dom";




class Home extends Component {

    logout(dispatch){
        localStorage.removeItem("userId");
        dispatch({type:"REMOVE_ID"});
        this.props.history.push("/");
    }

    render() {
        return (
            <UserConsumer>
                {value =>
                    <div>
                        {console.log(value.id)}
                        <h1>{value.id}</h1>
                        <button type="button" onClick={()=> {
                            this.logout(value.dispatch);
                        }}>Logout!</button>
                    </div>
                }
            </UserConsumer>
        );
    }
}

export default withRouter(Home);