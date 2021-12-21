import { IPayPalAccessToken } from "../../oauth/interfaces";
import { CONFIG } from "../../config";
import { DEFAULT_CREATE_ORDER_PAYLOAD } from "./constants";

export async function create(
  token: IPayPalAccessToken,
  data?: any,
  headers?: any
) {
  const payload =
    data && Object.keys(data).length > 0 ? data : DEFAULT_CREATE_ORDER_PAYLOAD;

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
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/checkout/orders`,
    options
  );
}
