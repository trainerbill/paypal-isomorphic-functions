import { IPayPalAccessToken } from "../oauth/interfaces";
import { Request, Response, NextFunction } from 'express';
import { createAccessToken } from '../oauth';

let accessToken: IPayPalAccessToken;

export async function accessTokenMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!accessToken || accessToken.expires_at > Date.now()) {
        accessToken = await createAccessToken();
    }
    req.paypalAccessToken = accessToken;
    return next();
}
