import { Request } from "express";
import { IPayPalAccessToken } from "../../oauth/interfaces";

declare global {
  namespace Express {
    export interface Request {
      paypalAccessToken: IPayPalAccessToken;
    }
  }
}
