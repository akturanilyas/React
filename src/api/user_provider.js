import React, {Component} from 'react';

export const UserContext = React.createContext();

function reducer(prevState, action) {
    switch (action.type) {
        case "REMOVE_JWT":
            return {jwt: ""};
        case "SET_JWT":
            return {jwt: action.payload};
    }
}

export class UserProvider extends Component {
    state = {
         jwt:"", dispatch: action => {
            this.setState(state => reducer(reducer, action))
        }
    };

    componentDidMount() {
        this.setState({jwt:localStorage.getItem("jwt")});

    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;