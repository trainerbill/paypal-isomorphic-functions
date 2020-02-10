import { IPayPalAccessToken } from "../../oauth/interfaces";
import { CONFIG } from "../../config";
import {
  DEFAULT_PAYMENT_CREATE_PAYLOAD,
  DEFAULT_PAYMENT_CAPTURE_PAYLOAD,
  DEFAULT_PAYMENT_UPDATE_PAYLOAD
} from "../constants";

export async function create(
  token: IPayPalAccessToken,
  data?: any,
  headers?: any
) {
  const payload =
    data && Object.keys(data).length > 0
      ? data
      : DEFAULT_PAYMENT_CREATE_PAYLOAD;

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
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/payments/payment`,
    options
  );
}

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
    )}/v1/payments/authorizations/${id}/capture`,
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
    data && Object.keys(data).length > 0
      ? data
      : DEFAULT_PAYMENT_UPDATE_PAYLOAD;

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
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/payments/payment/${id}`,
    options
  );
}
