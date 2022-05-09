import { NextFunction, Request, Response } from 'express';
import { UNAUTHORIZED } from 'http-status';

import firebase from './firebase';

const jwtAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const tokenId = req.headers['authorization']
    ? req.headers['authorization'].split(' ')
    : null;

  if (!tokenId || !tokenId[1]) {
    res.status(UNAUTHORIZED).send();
  } else {
    try {
      const token = await firebase.auth.verifyIdToken(tokenId[1]);

      req.user = {
        uid: token.uid,
        email: token.email!,
      };
      next();
    } catch (error) {
      res.status(UNAUTHORIZED).send();
    }
  }
};

export default jwtAuthenticate;
