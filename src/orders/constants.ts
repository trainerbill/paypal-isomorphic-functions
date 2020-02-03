export const DEFAULT_CREATE_ORDER_PAYLOAD = {
    intent: "CAPTURE",
    purchase_units: [
        {
            description: "This is cool",
            amount: {
                currency_code: "USD",
                value: "100.00"
            }
        }
    ]
};

export const DEFAULT_UPDATE_ORDER_PAYLOAD = [
    {
        op: "replace",
        path: "/purchase_units/@reference_id=='default'/description",
        value: "this is fine"
    }
];
