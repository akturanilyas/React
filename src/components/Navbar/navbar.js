import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "../Navbar/navbar.css";

import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className="btn-sm nav justify-content-center ktu-nav-bar">
                    <button className="navbar-brand btn" type="button">
                        <FontAwesomeIcon icon={faHome} className="ktu-item"/>
                    </button>
                    <button className="navbar-brand btn" type="button">
                        <FontAwesomeIcon icon={faSearch} className="ktu-item-selected border-dark"/>
                    </button>
                    <button className="navbar-brand btn" type="button">
                        <FontAwesomeIcon icon={faBell} className="ktu-item"/>
                    </button>
                    <button className="navbar-brand btn" type="button">
                        <FontAwesomeIcon icon={faUsers} className="ktu-item"/>
                    </button>
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faEllipsisH} className="ktu-item"/></a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Navbar;