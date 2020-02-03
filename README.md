## Intro

## Server config
Required Environment variables.  Protip:  use dotenv
```
PAYPAL_CLIENT_ID
PAYPAL_CLIENT_SECRET
PAYPAL_ENVIRONMENT
```

### Usage
```
import { Oauth, Orders } from 'paypal-isomorphic-functions';
let accessToken;

Oauth.createAccessToken()
    .then(token => accessToken = token)
    .then(token => Orders.createOrder(accessToken))
    .then(res => res.json())
    .then(data => Orders.updateOrder(accessToken, data.id))
    .then(data => document.getElementById('result').innerHTML = JSON.stringify(data));
```

### Middleware

If you are using typescript you may have to define the property on express.  add a file `src/types/express/index.d.ts` and add
```
import { Request } from "express";
import { Oauth } from "paypal-isomorphic-functions";

declare global {
  namespace Express {
    export interface Request {
      paypalAccessToken: Oauth.IPayPalAccessToken;
    }
  }
}
```

```
import { Middleware, Payments } from 'paypal-isomorphic-functions';
app.post(
  "/rest/v1/payments/payment",
  Middleware.accessTokenMiddleware,
  async (req, res) => {
    logger.verbose(`Body: ${req.body}`);
    const response = await Payments.create(req.paypalAccessToken, req.body);
    res.json(await response.json());
  }
);
```

# Client

### Include Script
* Download the /lib/paypal-isomorphic-functions.js and include it in your site
* Use unpkg:  `<script src="https://unpkg.com/paypal-isomorphic-functions@1.0.4/lib/paypal-isomorphic-functions.js"></script>` // Make sure you change the version number

### Usage
The library outputs to `window.paypalFunctions`.  Place your client/secret in localStorage

```
localStorage.setItem('PAYPAL_CLIENT_ID', '');
localStorage.setItem('PAYPAL_CLIENT_SECRET', '');
localStorage.setItem('PAYPAL_ENVIRONMENT', 'sandbox');

let accessToken;

paypalFunctions.Oauth.createAccessToken()
    .then(token => accessToken = token)
    .then(token => paypalFunctions.Orders.createOrder(accessToken))
    .then(res => res.json())
    .then(data => paypalFunctions.Orders.updateOrder(accessToken, data.id))
    .then(data => document.getElementById('result').innerHTML = JSON.stringify(data));
```