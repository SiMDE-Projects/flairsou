import { load } from 'ts-dotenv';

const env = load({
  SERVER_PORT: Number,
});

export default env;
