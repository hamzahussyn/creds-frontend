import { AxiosClient } from "../client";

export class Prediction {
  static generate(body: FormData) {
    return AxiosClient.post("equivalence", body);
  }
}