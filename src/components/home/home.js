import React, {Component} from 'react';
import UserConsumer from "../../api/user_provider";

class Home extends Component {


    render() {
        return (
            <UserConsumer>
                {value => <h1>{value.id}</h1>}
            </UserConsumer>
        );
    }
}

export default Home;