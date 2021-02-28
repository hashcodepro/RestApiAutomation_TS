"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonplaceholder_1 = require("../services/jsonplaceholder");
new jsonplaceholder_1.Posts().post().then(response => {
    console.log(`Status Code : ${response.statusCode}`);
    console.log(`Message : ${response.message}`);
    console.log(`Data : ${response.data}`);
});
