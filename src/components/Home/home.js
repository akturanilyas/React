import React, {Component} from "react";
import AddPost from "./add_post";
import Post from "./post";
import {getHomePagePosts} from "../../api/services/post_service";
import {UserContext} from "../../api/user_provider";
import {Spinner} from "react-bootstrap";
import {getUserGroup} from "../../api/services/group_service";

class Home extends Component {
    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.state = {isLoaded: false, posts: [], groups: []}
    }

    componentDidMount() {
        let user = this.context;
        getUserGroup(user["jwt"]).then(r => {
            this.setState({
                groups: r.groups
            })
        });

        getHomePagePosts(user["jwt"]).then(r => {
            this.setState({
                isLoaded: true, posts: r
            })
        });
    }

    render() {
        let posts = <>
            <div>
                {
                    this.state.posts.length ?
                        this.state.posts.map(post => {
                            return <Post post={post}/>
                        }) : <h3 className="row justify-content-center">Post not found</h3>}
            </div>
        </>
        let spinner =
            <div className="text-center pt-3"><Spinner animation="border"/></div>

        return (
            <div className="container-sm border">
                {<AddPost myGroups={this.state.groups} jwt={this.context["jwt"]}/>}
                {this.state.isLoaded ? posts : spinner}
            </div>
        )
    }
}

export default Home;
