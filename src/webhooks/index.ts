import { IPayPalAccessToken } from "../oauth/interfaces";
import { CONFIG } from "../config";

export async function listWebhooks(token: IPayPalAccessToken) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    }
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/notifications/webhooks`,
    options
  );
}

export async function listWebhookEventTypes(token: IPayPalAccessToken) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    }
  };
  return await fetch(
    `${CONFIG.get(
      "PAYPAL_REST_HOSTNAME"
    )}/v1/notifications/webhooks-event-types`,
    options
  );
}

export async function createWebhookListener(
  token: IPayPalAccessToken,
  url: string,
  event_types: any[]
) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url, event_types })
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/notifications/webhooks`,
    options
  );
}

export async function deleteWebhook(token: IPayPalAccessToken, id: string) {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    }
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/notifications/webhooks/${id}`,
    options
  );
}

export async function verifyWebhookSignature(
  token: IPayPalAccessToken,
  webhook_id: string,
  headers: any,
  webhook_event: any
) {
  const payload = {
    transmission_id: headers["paypal-transmission-id"],
    transmission_time: headers["paypal-transmission-time"],
    cert_url: headers["paypal-cert-url"],
    auth_algo: headers["paypal-auth-algo"],
    transmission_sig: headers["paypal-transmission-sig"],
    webhook_id,
    webhook_event
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
    `${CONFIG.get(
      "PAYPAL_REST_HOSTNAME"
    )}/v1/notifications/verify-webhook-signature`,
    options
  );
}
