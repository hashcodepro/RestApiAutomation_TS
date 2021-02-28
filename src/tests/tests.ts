import { Posts } from "../services/jsonplaceholder";

new Posts().post().then(response => {
    console.log(`Status Code : ${response.statusCode}`);
    console.log(`Message : ${response.message}`);
    console.log(`Data : ${response.data}`);
})