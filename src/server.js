import express from 'express';
import passport from 'passport';
import { urlencoded, json } from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { notFoundHandler, baseErrorHandler } from './middleware/middleware';
import firstApiVersion from './api/v1/index';

function startServer() {
  const app = express();
  const port = 3110;

  app.use(cors());
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cookieParser());
  app.use(passport.initialize());

  app.options('*', cors());
  app.use('/v1', firstApiVersion());
  app.use(notFoundHandler);
  app.use(baseErrorHandler);

  app.listen(port);
  console.log(`Server listening on port ${port}`);
}


export { startServer };
