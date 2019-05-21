import 'reflect-metadata'; // required for TypeORM
import express from 'express';
import { connect } from './db';
import * as serverConfig from './server-config';

(async () => {
  const app = express();

  const connection = await connect();
  if (connection) {
    console.info('DB connection established');
  } else {
    throw new Error('Cannot establish DB connection');
  }

  app.listen(serverConfig.port, () => {
    console.info(`The iDo server is listening at :${serverConfig.port}`);
  })
})();
