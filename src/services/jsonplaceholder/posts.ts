import { Api, RequestConfigs } from "../../utilities/rest";
import { config } from "../../config";
import { Method } from "../../enums";

export class Posts {

    public async getAllPosts(): Promise<rest.ApiResponse> {
        let response = await new Api().sendRequest(new RequestConfigs()
            .defaultConfiguration()
            .withBaseURL(config.api.jsonplaceholder.baseURL)
            .withUrl(config.api.jsonplaceholder.posts.uri)
            .withMethod(Method.GET)
            .build());

        return response;
    }

    public async getPost(id: number) {
        let url = config.api.jsonplaceholder.posts.uri + "/" + id.toString();

        let response = await new Api().sendRequest(new RequestConfigs()
            .defaultConfiguration()
            .withBaseURL(config.api.jsonplaceholder.baseURL)
            .withUrl(url)
            .withMethod(Method.GET)
            .build());

        return response;
    }

    public async createPost(data: jph.PostInput) {
        let response = await new Api().sendRequest(new RequestConfigs()
            .defaultConfiguration()
            .withBaseURL(config.api.jsonplaceholder.baseURL)
            .withUrl(config.api.jsonplaceholder.posts.uri)
            .withMethod(Method.POST)
            .withData(data)
            .build());

        return response;
    }

    public async updatePost(data: jph.Post) {
        let url = config.api.jsonplaceholder.posts.uri + "/" + data.id.toString();

        let response = await new Api().sendRequest(new RequestConfigs()
            .defaultConfiguration()
            .withBaseURL(config.api.jsonplaceholder.baseURL)
            .withUrl(url)
            .withMethod(Method.PUT)
            .withData(data)
            .build());

        return response;
    }

    public async patchPost(id: number, data: jph.PostInput) {
        let url = config.api.jsonplaceholder.posts.uri + "/" + id.toString();

        let response = await new Api().sendRequest(new RequestConfigs()
            .defaultConfiguration()
            .withBaseURL(config.api.jsonplaceholder.baseURL)
            .withUrl(url)
            .withMethod(Method.PATCH)
            .withData(data)
            .build());

        return response;
    }


}