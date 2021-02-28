import { Api, ApiResponse, RequestConfigs } from "../../utilities/requests";
import { config } from "../../config";
import { Method } from "../../enums";

export class Posts {

    public async post(): Promise<ApiResponse> {
        let response = await new Api().execute(new RequestConfigs()
            .defaultConfiguration()
            .withBaseURL(config.api.jsonplaceholder.baseURL)
            .withUrl(config.api.jsonplaceholder.posts.uri)
            .withMethod(Method.GET)
            .build());

        return response;
    }

}