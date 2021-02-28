"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const requests_1 = require("../../utilities/requests");
const config_1 = require("../../config");
const enums_1 = require("../../enums");
class Posts {
    async post() {
        let response = await new requests_1.Api().execute(new requests_1.RequestConfigs()
            .defaultConfiguration()
            .withBaseURL(config_1.config.api.jsonplaceholder.baseURL)
            .withUrl(config_1.config.api.jsonplaceholder.posts.uri)
            .withMethod(enums_1.Method.GET)
            .build());
        return response;
    }
}
exports.Posts = Posts;
