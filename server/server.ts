import 'reflect-metadata'; // required for TypeORM
import express from 'express';
import  bodyParser from 'body-parser';
import { connect } from './db';
import * as serverConfig from './server-config';
import { apiRouter } from './api/api';

(async () => {
  const app = express();

  const connection = await connect();
  if (connection) {
    console.info('DB connection established');
  } else {
    throw new Error('Cannot establish DB connection');
  }

  app.use(bodyParser.json());
  app.use('/api', apiRouter);
  app.listen(serverConfig.port, () => {
    console.info(`The iDo server is listening at :${serverConfig.port}`);
  });
})();
