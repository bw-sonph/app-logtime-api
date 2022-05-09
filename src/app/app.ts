import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as qs from 'qs';

import jwtAuthenticate from './passport';
import router from './routes';

const app = express();

app.set('query parser', (str: any) =>
  qs.parse(str, {
    arrayLimit: 1000,
    parseArrays: true,
    allowDots: false,
    allowPrototypes: true,
  }),
);

const options: cors.CorsOptions = {
  origin: '*',
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization',
  ],
  credentials: false,
  methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(options));

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

app.use('/v1/', jwtAuthenticate, router);

export default app;
