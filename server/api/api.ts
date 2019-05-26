import express from 'express';
import { userRouter } from './user';
import { sendError } from './utils';

/**
 * @url /api/*
 */
const apiRouter = express.Router();

apiRouter.use('/user', userRouter);

apiRouter.get('/config', (req: express.Request, res: express.Response) => {
  res.send({
    version: '0.0.1',
  });
});

apiRouter.use((req: express.Request, res: express.Response) => {
  sendError(res, {
    status: 501,
    message: 'Not implemented',
    debug: {
      path: '/api' + req.path,
      method: req.method,
    }
  });
});

export { apiRouter };

