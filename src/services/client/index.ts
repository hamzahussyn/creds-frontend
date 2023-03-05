import axios, { AxiosResponse } from "axios";

export class AxiosClient {
  private static readonly baseURL: string =
    "https://d9cd-2602-fea7-e0d-1004-138c-ddf0-f199-1.ngrok.io/";

  static post(endpoint: string, body: any): Promise<AxiosResponse<any, any>> {
    return axios.post(this.baseURL + endpoint, body, {
      headers: { "ngrok-skip-browser-warning": "69420" },
    });
  }
}
