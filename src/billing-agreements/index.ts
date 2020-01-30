import { DEFAULT_CREATE_BILLING_AGREEMENT_TOKEN_PAYLOAD } from "./constants";
import { IPayPalAccessToken } from "../oauth/interfaces";
import { CONFIG } from "../config";

export async function createBillingAgreementToken(
  token: IPayPalAccessToken,
  data: any = {}
) {
  const payload = Object.keys(data).length > 0 ? data : DEFAULT_CREATE_BILLING_AGREEMENT_TOKEN_PAYLOAD;

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
    )}/v1/billing-agreements/agreement-tokens`,
    options
  );
}

export async function createBillingAgreement(
  token: IPayPalAccessToken,
  token_id: string
) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ token_id })
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/billing-agreements/agreements`,
    options
  );
}
