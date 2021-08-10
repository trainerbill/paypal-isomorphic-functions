import { CONFIG } from "../config";
import { IPayPalAccessToken } from "../oauth";

export async function evaluateDevice(
  token: IPayPalAccessToken,
  id: string,
  headers?: any
) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify({ device_id: id })
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/risk/device-evaluate`,
    options
  );
}
