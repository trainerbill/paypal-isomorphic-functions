import { IPayPalAccessToken } from "../oauth/interfaces";
import { CONFIG } from "../config";

export async function createOrder(token: IPayPalAccessToken, data = {}) {
  const payload = {
    intent: "CAPTURE",
    purchase_units: [{ amount: { currency_code: "USD", value: "100.00" } }],
    ...data
  };

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v2/checkout/orders`,
    options
  );
}
