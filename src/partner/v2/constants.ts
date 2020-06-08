import { ProductName } from "./interfaces";

export const DEFAULT_CUSTOMER_CREATE_PAYLOAD = {
  operations: [
    {
      operation: "API_INTEGRATION",
      api_integration_preference: {
        rest_api_integration: {
          integration_method: "PAYPAL",
          integration_type: "THIRD_PARTY",
          third_party_details: {
            features: ["PAYMENT", "REFUND"]
          }
        }
      }
    }
  ],
  products: [ProductName.EXPRESS_CHECKOUT],
  legal_consents: [
    {
      type: "SHARE_DATA_CONSENT",
      granted: true
    }
  ]
};
