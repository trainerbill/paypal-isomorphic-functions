import { IPayPalAccessToken } from "../../oauth/interfaces";
import { CONFIG } from "../../config";
import {
  DEFAULT_CREATE_ORDER_PAYLOAD,
  DEFAULT_UPDATE_ORDER_PAYLOAD
} from "./constants";

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
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v2/checkout/orders`,
    options
  );
}

export async function update(
  token: IPayPalAccessToken,
  id: string,
  data?: any,
  headers?: any
) {
  const payload =
    data && Object.keys(data).length > 0 ? data : DEFAULT_UPDATE_ORDER_PAYLOAD;

  const options = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify(payload)
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v2/checkout/orders/${id}`,
    options
  );
}

export async function get(
  token: IPayPalAccessToken,
  id: string,
  headers?: any
) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json",
      ...headers
    }
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v2/checkout/orders/${id}`,
    options
  );
}

export async function authorize(
  token: IPayPalAccessToken,
  id: string,
  data?: any,
  headers?: any
) {
  // TODO: add a default
  const payload = data;

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
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v2/checkout/orders/${id}/authorize`,
    options
  );
}

export async function capture(
  token: IPayPalAccessToken,
  id: string,
  data?: any,
  headers?: any
) {
  // TODO: add a default
  const payload = data;

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
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v2/checkout/orders/${id}/capture`,
    options
  );
}
