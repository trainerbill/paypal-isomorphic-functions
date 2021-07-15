import { IPayPalAccessToken } from "./interfaces";
import { CONFIG } from "../config";

export * from "./interfaces";

export async function createAccessToken() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      Authorization: `Basic ${CONFIG.get("PAYPAL_REST_BEARER")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials&response_type=token"
  };

  const res = await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/oauth2/token`,
    options
  );

  const response: IPayPalAccessToken = await res.json();
  response.expires_at = Date.now() + response.expires_in;

  return response;
}

export async function getUserInfo() {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Basic ${CONFIG.get("PAYPAL_REST_BEARER")}`,
      "Content-Type": "application/json"
    }
  };

  return await fetch(
    `${CONFIG.get(
      "PAYPAL_REST_HOSTNAME"
    )}/v1/oauth2/userinfo?schema=paypalv1.1`,
    options
  );
}
