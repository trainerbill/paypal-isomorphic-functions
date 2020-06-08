import { IPayPalAccessToken } from "../../oauth/interfaces";
import { CONFIG } from "../../config";

export async function trackById(
  token: IPayPalAccessToken,
  id: string,
  headers?: any
) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      ...headers
    }
  };
  return await fetch(
    `${CONFIG.get("PAYPAL_REST_HOSTNAME")}/v1/customer/partners/${CONFIG.get(
      "PAYPAL_ACCOUNT_ID"
    )}/merchant-integrations?tracking_id=${id}`,
    options
  );
}
