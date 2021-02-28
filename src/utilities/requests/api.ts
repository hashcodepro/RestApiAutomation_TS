import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse } from "./requests";

export class Api {

  public async execute(requestConfig: AxiosRequestConfig): Promise<ApiResponse> {
    return this.getResponse(
      await axios.request(requestConfig)
    );
  }

  public getResponse(response: AxiosResponse): ApiResponse {
    return {
      statusCode: response.status,
      message: response.statusText,
      data: response.data
    }
  }
}
