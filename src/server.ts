import express, { Request, Response, Express } from 'express';

export default class Server {
  readonly port: number

  app: Express

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello world !');
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log('Server started !');
    });
  }
  
  getExpress() : Express {
    return this.app;
  }
}
