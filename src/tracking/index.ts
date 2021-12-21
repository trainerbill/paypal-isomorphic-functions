import { IPayPalAccessToken } from "../oauth";
import { CONFIG } from "../config";
import { ITrackingBatch } from "./interfaces";

export async function batch(
  token: IPayPalAccessToken,
  data?: ITrackingBatch,
  headers?: any
) {
  // TODO: add a default
  const payload = data;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify(payload)
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/shipping/trackers-batch`,
    options
  );
}
