import React, {Component} from 'react';
import UserConsumer from "../api/user_provider";

class Home extends Component {
    render() {
        return (
            <UserConsumer>
                {value => console.log(value)}
            </UserConsumer>
        );
    }
}

export default Home;