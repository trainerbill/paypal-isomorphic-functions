import { IPayPalAccessToken } from "../oauth/interfaces";
import { CONFIG } from "../config";
import { DEFAULT_PAYMENT_CREATE_PAYLOAD } from "./constants";

export async function create(token: IPayPalAccessToken, data?: any) {
  const payload = data || DEFAULT_PAYMENT_CREATE_PAYLOAD;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/payments/payment`,
    options
  );
}
