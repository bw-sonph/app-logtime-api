import { NextFunction, Request, Response } from 'express';

import firebase from '../firebase';
import BaseController from './_base';

class AuthController extends BaseController {
  constructor(db: typeof firebase) {
    super(db);

    this.search = this.nextWrapper(this.search);
  }

  public search = async (req: Request, res: Response, _next: NextFunction) => {
    res.json(req.user);
  };
}

export default new AuthController(firebase);
