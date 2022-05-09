/**
 * user info will be added by authentication middleware
 * define interface of req.user
 */
interface IUser {
  uid: string;
  email: string;
}

declare namespace Express {
  export interface Request {
    user?: IUser;
  }
}
