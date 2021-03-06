export const DEFAULT_PAYMENT_CREATE_PAYLOAD = {
  intent: "sale",
  payer: {
    payment_method: "paypal"
  },
  transactions: [
    {
      amount: {
        total: "30.11",
        currency: "USD",
        details: {
          subtotal: "30.00",
          tax: "0.07",
          shipping: "0.03",
          handling_fee: "1.00",
          shipping_discount: "-1.00",
          insurance: "0.01"
        }
      },
      description: "The payment transaction description.",
      custom: "EBAY_EMS_90048630024435",
      invoice_number: "48787589673",
      payment_options: {
        allowed_payment_method: "INSTANT_FUNDING_SOURCE"
      },
      soft_descriptor: "ECHI5786786",
      item_list: {
        items: [
          {
            name: "hat",
            description: "Brown hat.",
            quantity: "5",
            price: "3",
            tax: "0.01",
            sku: "1",
            currency: "USD"
          },
          {
            name: "handbag",
            description: "Black handbag.",
            quantity: "1",
            price: "15",
            tax: "0.02",
            sku: "product34",
            currency: "USD"
          }
        ],
        shipping_address: {
          recipient_name: "Brian Robinson",
          line1: "4th Floor",
          line2: "Unit #34",
          city: "San Jose",
          country_code: "US",
          postal_code: "95131",
          phone: "011862212345678",
          state: "CA"
        }
      }
    }
  ],
  note_to_payer: "Contact us for any questions on your order.",
  redirect_urls: {
    return_url: "https://example.com/return",
    cancel_url: "https://example.com/cancel"
  }
};

export const DEFAULT_PAYMENT_CAPTURE_PAYLOAD = {
  amount: {
    value: "1.99",
    currency_code: "USD"
  },
  final_capture: true
};

export const DEFAULT_PAYMENT_UPDATE_PAYLOAD = [
  {
    op: "replace",
    path: "/transactions/0/amount",
    value: {
      total: "35.11",
      currency: "USD",
      details: {
        subtotal: "30.00",
        tax: "0.07",
        shipping: "5.03",
        handling_fee: "1.00",
        shipping_discount: "-1.00",
        insurance: "0.01"
      }
    }
  },
  {
    op: "add",
    path: "/transactions/0/item_list/shipping_address",
    value: {
      recipient_name: "Anna Gruneberg",
      line1: "101 main st",
      city: "Beverly Hills",
      postal_code: "90210",
      country_code: "US",
      state: "CA"
    }
  }
];

export const DEFAULT_REFERENCE_TRANSACTION_PAYLOAD = {
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
      }
    }
  ]
};
