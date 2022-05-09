import { NextFunction, Request, Response } from 'express';
import { CREATED, NO_CONTENT } from 'http-status';

import firebase from '../firebase';

export default abstract class BaseController {
  protected readonly db: typeof firebase;

  constructor(db: typeof firebase) {
    this.db = db;
  }

  protected ok(res: Response, data: { rows: any; count?: number }) {
    if (data.count !== undefined) {
      res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
      res.setHeader('X-Total-Count', data.count);
    }

    res.json(data.rows);
  }

  protected created(res: Response, result?: any) {
    if (result === undefined) {
      res.status(CREATED).send();
    } else {
      res.status(CREATED).json(result);
    }
  }

  protected noContent(res: Response) {
    res.status(NO_CONTENT).send();
  }

  protected nextWrapper(
    mainFunction: (
      req: Request,
      res: Response,
      next?: NextFunction,
    ) => Promise<void>,
  ) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await mainFunction(req, res, next);
      } catch (err) {
        next(err);
      }
    };
  }
}
