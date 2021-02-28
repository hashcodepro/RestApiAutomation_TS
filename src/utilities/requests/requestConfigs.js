"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestConfigs = void 0;
class RequestConfigs {
    defaultConfiguration() {
        this.conf = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        return this;
    }
    withBaseURL(baseURL) {
        this.conf.baseURL = baseURL;
        return this;
    }
    withUrl(url) {
        this.conf.url = url;
        return this;
    }
    withMethod(method) {
        this.conf.method = method;
        return this;
    }
    withHeaders(headers) {
        this.conf.headers = Object.assign(Object.assign({}, this.conf.headers), headers);
        return this;
    }
    withParams(params) {
        this.conf.params = params;
        return this;
    }
    withData(data) {
        this.conf.data = data;
        return this;
    }
    build() {
        return this.conf;
    }
}
exports.RequestConfigs = RequestConfigs;
