import { createConnection } from 'typeorm';
import dbConfig from './config';

export async function connect() {
  return await createConnection(dbConfig);
}
