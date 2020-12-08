import express, { Request, Response } from 'express';

export default class Server {
readonly port: number

constructor(port: number) {
  this.port = port;
}

start() {
  const app = express();
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello world !');
  });
  app.listen(this.port, () => {
    console.log('Server started !');
  });
}
}
