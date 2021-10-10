import axios from "axios";
import jwt_decode from "jwt-decode";

export async function createGroup(jwt, name, faculty) {
    await axios.post(
        "http://127.0.0.1:3500/api/groups/",
        {
            name: name,
            faculty: faculty
        }, {
            headers: {
                'auth-token': jwt
            }
        }
    );
}

export async function getUserGroup(jwt) {
    const id = jwt_decode(jwt)["id"];
    const response = await axios.get(
        "http://127.0.0.1:3500/api/groups/",
        {
            headers: {
                'auth-token': jwt
            }
        }
    );
    console.log(response)
    return response.data;
}