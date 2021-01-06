import express, { Request, Response, Express } from 'express';
import debug from 'debug';
import { MikroORM, RequestContext } from '@mikro-orm/core';
import ORMConfig from './mikro-orm.config';

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

  async start() {
    log('Init ORM');
    const orm = await MikroORM.init(ORMConfig);
    this.app.use((req, res, next) => {
      RequestContext.create(orm.em, next);
    });

    log('Starting server');
    this.app.listen(this.port, () => {
      log('Server started');
    });
  }

  getExpress() : Express {
    return this.app;
  }
}
