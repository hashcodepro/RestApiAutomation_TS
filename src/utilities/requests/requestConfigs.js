"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestConfigs = void 0;
var RequestConfigs = /** @class */ (function () {
    function RequestConfigs() {
    }
    RequestConfigs.prototype.defaultConfiguration = function () {
        this.conf = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        return this;
    };
    RequestConfigs.prototype.withBaseURL = function (baseURL) {
        this.conf.baseURL = baseURL;
        return this;
    };
    RequestConfigs.prototype.withUrl = function (url) {
        this.conf.url = url;
        return this;
    };
    RequestConfigs.prototype.withMethod = function (method) {
        this.conf.method = method;
        return this;
    };
    RequestConfigs.prototype.withHeaders = function (headers) {
        this.conf.headers = __assign(__assign({}, this.conf.headers), headers);
        return this;
    };
    RequestConfigs.prototype.withParams = function (params) {
        this.conf.params = params;
        return this;
    };
    RequestConfigs.prototype.withData = function (data) {
        this.conf.data = data;
        return this;
    };
    RequestConfigs.prototype.build = function () {
        return this.conf;
    };
    return RequestConfigs;
}());
exports.RequestConfigs = RequestConfigs;
