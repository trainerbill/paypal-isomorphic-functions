import { CONFIG } from "../../config";
import { IPayPalAccessToken } from "../../oauth";
import { DEFAULT_PAYMENT_CAPTURE_PAYLOAD } from "../../payments/constants";

export async function capture(
  token: IPayPalAccessToken,
  id: string,
  data?: any,
  headers?: any
) {
  const payload =
    data && Object.keys(data).length > 0
      ? data
      : DEFAULT_PAYMENT_CAPTURE_PAYLOAD;

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
    `${CONFIG.get(
      "PAYPAL_REST_HOSTNAME"
    )}/v2/payments/authorizations/${id}/capture`,
    options
  );
}
