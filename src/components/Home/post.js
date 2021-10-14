import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faUsers} from "@fortawesome/free-solid-svg-icons";
import React from "react";


function Post(props) {
    let time = Date(props.post.created)
    let image =
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350";
    let post = (
        <div className="card border p-5">
            <div className="container">
                <div className="row row-cols-auto align-items-center border-bottom ">
                    <div className="col">
                        <FontAwesomeIcon className="col" icon={faUsers}/>
                    </div>
                    <div>
                        <h1 className="col">{props.post.user.name}</h1>
                    </div>
                    <div>
                        <FontAwesomeIcon className="col" icon={faAngleRight}/>
                    </div>
                    <div className="col">
                        <h1>{props.post.group.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <h1>{props.post.content}</h1>
                </div>
                <section className="one-fourth" id="html"><img src={image}/>
                </section>
                <div className="row">
                    <h1>{time}</h1>
                </div>
            </div>
        </div>
    );

    return post;
}
export default Post