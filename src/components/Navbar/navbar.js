import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "../Navbar/navbar.css";

import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import {withRouter} from "react-router-dom";

const navbarItems = [faHome, faSearch, faBell, faUsers];


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
        this.navbarButtonOnClick = this.navbarButtonOnClick.bind(this);
    }


    navbarButtonOnClick = (index) => {

        this.setState({selected: index})
        switch (index) {
            case 0:
                return this.props.history.push("/home");
            case 1:
                return this.props.history.push("/search");
            case 2:
                return this.props.history.push("/announcement");
            case 3:
                return this.props.history.push("/groups");
            default:
                return this.props.history.push("/home");
        }
    }

    render() {
        return (
            <nav className="
            sticky-top navbar-expand-xxl
            navbar-expand-sm ktu-nav-bar ">
                <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                    <ul className="nav justify-content-center ">
                        {
                            navbarItems.map((item, index) => {
                                return (<button className="navbar-brand btn m-2"
                                                type="button" onClick={() => this.navbarButtonOnClick(index)}>
                                    <FontAwesomeIcon icon={item}
                                                     className={this.state.selected === index ? "ktu-item-selected border-dark" : "ktu-item"}/>
                                </button>)
                            })
                        }
                        <div className="navbar-brand btn m-2 dropdown ">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                               aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faEllipsisH}
                                                                                           className="ktu-item"/></a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        );
    }
}


export default withRouter(Navbar);