import { load } from 'ts-dotenv';
import debug from 'debug';

const log = debug('flairsou:config');

log('Loading environment variables');

const env = load({
  SERVER_PORT: Number,
  DB_HOST: String,
  DB_PORT: Number,
  DB_NAME: String,
  DB_USER: String,
  DB_PASSWD: String,
});

log('Environment variables loaded:');
log(env);

export default env;
