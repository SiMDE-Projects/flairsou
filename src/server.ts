import express, { Request, Response, Express } from 'express';
import debug from 'debug';

const log = debug('flairsou:server');

export default class Server {
  readonly port: number

  app: Express

  constructor(port: number) {
    log('Creating server');
    this.port = port;
    this.app = express();

    log('Registering routes');
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello world !');
    });
  }

  start() {
    log('Starting server');
    this.app.listen(this.port, () => {
      log('Server started');
    });
  }

  getExpress() : Express {
    return this.app;
  }
}
