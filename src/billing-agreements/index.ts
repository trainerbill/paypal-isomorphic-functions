import { DEFAULT_CREATE_BILLING_AGREEMENT_TOKEN_PAYLOAD } from "./constants";
import { IPayPalAccessToken } from "../oauth/interfaces";
import { CONFIG } from "../config";

export async function createToken(
  token: IPayPalAccessToken,
  data?: any,
  headers?: any,
) {
  const payload = data || DEFAULT_CREATE_BILLING_AGREEMENT_TOKEN_PAYLOAD;

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
    )}/v1/billing-agreements/agreement-tokens`,
    options
  );
}

export async function create(
  token: IPayPalAccessToken,
  token_id: string,
  headers?: any
) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify({ token_id })
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/billing-agreements/agreements`,
    options
  );
}
