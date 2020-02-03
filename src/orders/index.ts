import { IPayPalAccessToken } from "../oauth/interfaces";
import { CONFIG } from "../config";
import { DEFAULT_CREATE_ORDER_PAYLOAD, DEFAULT_UPDATE_ORDER_PAYLOAD } from './constants'

export async function createOrder(token: IPayPalAccessToken, data: any) {
  const payload = data || DEFAULT_CREATE_ORDER_PAYLOAD;

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

export async function updateOrder(token: IPayPalAccessToken, id: string, data: any) {
  const payload = data || DEFAULT_UPDATE_ORDER_PAYLOAD;

  const options = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v2/checkout/orders/${id}`,
    options
  );
}
