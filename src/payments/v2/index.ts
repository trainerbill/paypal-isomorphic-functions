import { CONFIG } from "../../config";
import { IPayPalAccessToken } from "../../oauth";

export async function capture(
  token: IPayPalAccessToken,
  id: string,
  data?: any,
  headers?: any
) {
  const payload = data || {};

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

export async function refund(
  token: IPayPalAccessToken,
  id: string,
  data: any,
  headers?: any
) {
  const payload = data || {};

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
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v2/payments/captures/${id}/refund`,
    options
  );
}

export async function cancel(
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
    }
  };
  return await fetch(
    `${CONFIG.get(
      "PAYPAL_REST_HOSTNAME"
    )}/v2/payments/authorizations/${id}/void`,
    options
  );
}
