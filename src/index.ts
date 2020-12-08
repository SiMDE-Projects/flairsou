import Server from './server';

import env from './utils/config';

const server = new Server(env.SERVER_PORT);
server.start();
