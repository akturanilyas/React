import React, {Component} from 'react';

const UserContext = React.createContext();

function reducer(prevState, action) {
    switch (action.type) {
        case "REMOVE_ID":
            return {id: ""};
        case "SET_ID":
            return {id: action.payload};
    }
}

export class UserProvider extends Component {
    state = {
        id: "", dispatch: action => {
            this.setState(state => reducer(reducer, action))
        }
    };



    componentDidMount() {
        this.setState({id: localStorage.getItem("userId")});
        console.log(this.state.id);
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