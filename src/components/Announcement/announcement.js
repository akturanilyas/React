import React, {Component} from 'react';
import {getAnnouncements} from "../../api/services/announcement_service";
import {UserContext} from "../../api/user_provider";
import {Spinner} from "react-bootstrap";
import Card from "./card";

class Announcement extends Component {
    constructor() {
        super();
        this.state = {isLoaded: false, announcements: []}
    }

    static contextType = UserContext;


    componentDidMount() {
        let user = this.context
        getAnnouncements(user["jwt"]).then(r => {
            this.setState({
                announcements: r,
                isLoaded: true
            })
        });
    }

    render() {
        let spinner =
            <div className="align-content-center text-center pt-3"><Spinner animation="border"/></div>
        return (
            <div className="container-sm align-content-center">
                {this.state.isLoaded == true ?
                    this.state.announcements.map((announcement) => {
                        return <Card announcement={announcement}/>;
                    }) : spinner
                }
            </div>
        );
    }
}

export default Announcement;