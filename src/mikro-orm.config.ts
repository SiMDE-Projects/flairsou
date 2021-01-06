import {
  Connection, ConnectionOptions, IDatabaseDriver, Options,
} from '@mikro-orm/core';
import env from './utils/config';

const options: ConnectionOptions = {
  dbName: env.DB_NAME,
  host: env.DB_HOST,
  user: env.DB_USER,
  port: env.DB_PORT,
  password: env.DB_PASSWD,
};

export interface ConnectionConfig extends ConnectionOptions {
    type: string,
    entities: Array<string>,
    entitiesTs: Array<string>
}

const config: Options<IDatabaseDriver<Connection>> = {
  type: 'mariadb',
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  ...options,
};

export default config;
