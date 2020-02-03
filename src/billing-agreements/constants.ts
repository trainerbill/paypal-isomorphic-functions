export const DEFAULT_CREATE_BILLING_AGREEMENT_TOKEN_PAYLOAD = {
  description: "Billing Agreement",
  shipping_address: {
    line1: "1350 North First Street",
    city: "San Jose",
    state: "CA",
    postal_code: "95112",
    country_code: "US",
    recipient_name: "John Doe"
  },
  payer: {
    payment_method: "PAYPAL"
  },
  plan: {
    type: "MERCHANT_INITIATED_BILLING",
    merchant_preferences: {
      return_url: "https://example.com/return",
      cancel_url: "https://example.com/cancel",
      notify_url: "https://example.com/notify",
      accepted_pymt_type: "INSTANT",
      skip_shipping_address: false,
      immutable_shipping_address: true
    }
  }
};

export const DEFAULT_CREATE_PAYMENT_WITH_BILLING_AGREEMENT_PAYLOAD = {
  intent: "sale",
  payer: {
    payment_method: "PAYPAL",
    funding_instruments: [
      {
        billing: {
          billing_agreement_id: "B-50V812176H0783741"
        }
      }
    ]
  },
  transactions: [
    {
      amount: {
        currency: "USD",
        total: "1.00"
      },
      description: "Payment transaction.",
      custom: "Payment custom field.",
      note_to_payee: "Note to payee field.",
      invoice_number: "GDAGDS5754YEK",
      item_list: {
        items: [
          {
            sku: "skuitemNo1",
            name: "ItemNo1",
            description: "The item description.",
            quantity: "1",
            price: "1.00",
            currency: "USD",
            tax: "0",
            url: "https://example.com/"
          }
        ]
      }
    }
  ],
  redirect_urls: {
    return_url: "https://example.com/return",
    cancel_url: "https://example.com/cancel"
  }
};
