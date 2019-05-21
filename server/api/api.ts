import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/config', (req: express.Request, res: express.Response) => {
  res.send({
    version: '0.0.1',
  });
});

apiRouter.use((req: express.Request, res: express.Response) => {
  res
    .status(501)
    .send({
      error: '501 Not implemented',
      path: '/api' + req.path,
    })
});

export { apiRouter };

