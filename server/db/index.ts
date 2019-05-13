import { ConnectionOptions, createConnection } from 'typeorm';
import * as creds from '../creds.json';
import * as dbConfig from './config.json';

export async function connect() {
  return await createConnection({ ...dbConfig, ...creds.db } as ConnectionOptions);
}
