import express from 'express';

import user from './endpoints/user';
import transactions from './endpoints/transactions';
import auth from './endpoints/auth';

export default function () {
  const router = express.Router();

  router.use('/auth', auth());
  router.use('/user', user());
  router.use('/transactions', transactions());

  return router;
}
