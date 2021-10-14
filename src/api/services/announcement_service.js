import axios from "axios";

export async function getAnnouncements(jwt) {
    const response = await axios.get(
        "http://127.0.0.1:3500/api/announcements/",
        {
            headers: {
                'auth-token': jwt
            }
        }
    );
    console.log(response.data)
    return response.data;
}