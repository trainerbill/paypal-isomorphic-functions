import { Oauth, Orders } from "./src";

async function run() {

    try {
        const accessToken = await Oauth.createAccessToken()
        const res = await Orders.create(accessToken);
        const order = await res.json();
        console.log(order);
    } catch (error) {
        console.log(error);
    }


}

run();

