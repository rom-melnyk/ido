import { createConnection } from 'typeorm';
import config from './config';

export async function connect() {
  return await createConnection(config);
}
