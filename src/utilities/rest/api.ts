import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class Api {

  public async sendRequest(requestConfig: AxiosRequestConfig): Promise<rest.ApiResponse> {
    return this.getResponse(
      await axios.request(requestConfig)
    );
  }

  private getResponse(response: AxiosResponse): rest.ApiResponse {
    return {
      statusCode: response.status,
      message: response.statusText,
      data: response.data
    }
  }
}
