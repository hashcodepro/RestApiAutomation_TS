import { AxiosRequestConfig } from "axios"
import { Method } from "../../enums";

export class RequestConfigs {

    private conf!: AxiosRequestConfig;

    public defaultConfiguration(): RequestConfigs {
        this.conf = {
            headers: {
                "Content-Type": "application/json"
            },
        }
        return this;
    }

    public withBaseURL(baseURL: string): RequestConfigs {
        this.conf.baseURL = baseURL;
        return this;
    }

    public withUrl(url: string): RequestConfigs {
        this.conf.url = url;
        return this;
    }

    public withMethod(method: Method): RequestConfigs {
        this.conf.method = method;
        return this;
    }

    public withHeaders(headers: Object): RequestConfigs {
        this.conf.headers = { ...this.conf.headers, ...headers };
        return this;
    }

    public withParams(params: Object | URLSearchParams): RequestConfigs {
        this.conf.params = params;
        return this;
    }

    public withData(data: string | Object | ArrayBuffer | ArrayBufferView | URLSearchParams): RequestConfigs {
        this.conf.data = data;
        return this;
    }

    public build(): AxiosRequestConfig {
        return this.conf;
    }
}