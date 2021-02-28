"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importDefault(require("axios"));
class Api {
    async execute(requestConfig) {
        return this.getResponse(await axios_1.default.request(requestConfig));
    }
    getResponse(response) {
        return {
            statusCode: response.status,
            message: response.statusText,
            data: response.data
        };
    }
}
exports.Api = Api;
