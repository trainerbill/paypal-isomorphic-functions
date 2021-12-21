import { Oauth, Orders, Payments } from "./src";

async function run() {

    try {
        const accessToken = await Oauth.createAccessToken()
        const res = await Orders.v2.create(accessToken);
        const order = await res.json();
        console.log(order);
        const res1 = await Payments.v1.authorizeOrder(accessToken, order.id, {
            amount: {
                currency: "USD",
                total: "1.00"
            }
        });
        const auth = await res1.json();

        console.log(auth);
    } catch (error) {
        console.log(error);
    }


}

run();

