import 'reflect-metadata';
import { connect } from './db';

(async () => {
  try {
    const connection = await connect();
    console.info(connection && 'Me works');
  } catch (e) {
    console.error('Cannot establish DB connection', e);
  }
})();
