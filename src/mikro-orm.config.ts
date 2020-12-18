import { ConnectionOptions } from '@mikro-orm/core';
import env from './utils/config';

const options: ConnectionOptions = {
  dbName: env.DB_NAME,
  host: env.DB_HOST,
  user: env.DB_USER,
  port: env.DB_PORT,
  password: env.DB_PASSWD,
};

export interface ConnectionConfig extends ConnectionOptions {
    type: string
}

const config: ConnectionConfig = {
  type: 'mariadb',
  ...options,
};

export default config;
