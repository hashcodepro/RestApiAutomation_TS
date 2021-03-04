import { Api, RequestConfigs } from "../../utilities/rest";
import { config } from "../../config";
import { Method } from "../../enums";

export class Posts {

    public async post(): Promise<rest.ApiResponse> {
        let response = await new Api().sendRequest(new RequestConfigs()
            .defaultConfiguration()
            .withBaseURL(config.api.jsonplaceholder.baseURL)
            .withUrl(config.api.jsonplaceholder.posts.uri)
            .withMethod(Method.GET)
            .build());

        return response;
    }

}