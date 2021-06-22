import express, { Response, Request } from 'express';
import next from 'next';

import connectDb from './utils/db/connectiondb';

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';

(async function runServer() {
  try {
    const app = next({ dev });

    const handle = app.getRequestHandler();

    await connectDb();

    await app.prepare();
    const server = express();

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
