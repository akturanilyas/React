import React, {Component} from "react";
import AddPost from "./add_post";
import Post from "./post";
import {getHomePagePosts} from "../../api/services/post_service";
import {UserContext} from "../../api/user_provider";
import {Spinner} from "react-bootstrap";

class Home extends Component {
    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.state = {isLoaded: false, posts: []}
    }

    render() {
        let user = this.context;
        if (this.state.isLoaded == false) {
            getHomePagePosts(user["jwt"]).then(r => {
                this.setState({
                    isLoaded: true, posts: r
                })
            })
        }
        let posts = <>
            <div>
                {this.state.posts.map(post => {
                     return <Post post ={post}/>
                })}
                {this.state.posts.length}
            </div>
        </>
        let spinner =
                <Spinner animation="border"/>

        return (
            <div className="container-sm border">
                {<AddPost/>}
                {this.state.isLoaded? posts: spinner}
            </div>
        )
    }
}

export default Home;
