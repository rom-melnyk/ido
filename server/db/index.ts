import { createConnection } from 'typeorm';
import dbConfig from './db-config';

export async function connect() {
  return await createConnection(dbConfig);
}
