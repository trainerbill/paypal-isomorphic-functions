import { IPayPalAccessToken } from "../../oauth/interfaces";
import { CONFIG } from "../../config";
import { DEFAULT_CUSTOMER_CREATE_PAYLOAD } from "./constants";
import { randomString } from "../../util";

export async function create(
  token: IPayPalAccessToken,
  trackingId?: string,
  data?: any,
  headers?: any
) {
  const payload =
    data && Object.keys(data).length > 0
      ? data
      : DEFAULT_CUSTOMER_CREATE_PAYLOAD;

  payload.tracking_id = trackingId ? trackingId : randomString();

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
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v2/customer/partner-referrals`,
    options
  );
}
