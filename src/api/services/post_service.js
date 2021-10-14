import axios from "axios";
import jwt_decode from "jwt-decode";


export async function sendPost(jwt,groupId , content) {
    await axios.post(
        "http://127.0.0.1:3500/api/groups/" + groupId + "/posts",
        {
            content: content
        }, {
            headers: {
                'auth-token': jwt
            }
        }
    );
}

export async function getHomePagePosts(jwt) {
    const id = jwt_decode(jwt)["id"];
    const response = await axios.get(
        "http://127.0.0.1:3500/api/users/" + id + "/posts",
        {
            headers: {
                'auth-token': jwt
            }
        }
    );
    return response.data;
}