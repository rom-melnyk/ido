import express from 'express';
import { User } from '../db/entity/user';
import { sendError } from './utils';

/**
 * @url /api/user/*
 */
const userRouter = express.Router();

/**
 * @method POST
 * @url /api/user
 */
userRouter.post('/', async (req: express.Request, res: express.Response) => {
  try {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.hash = 'TODO: IMPLEMENT ME';
    await user.save();
    res.send({
      user,
    });
  } catch (e) {
    console.error(e);
    sendError(res, { status: 500, message: 'Failed creating a user' });
  }
});

/**
 * @method GET
 * @url /api/user/all
 */
userRouter.get('/all', async (req: express.Request, res: express.Response) => {
  try {
    const users = await User.find();
    res.send({
      users,
    });
  } catch (e) {
    console.error(e);
    sendError(res, { status: 500, message: 'Failed fetching users' });
  }
});

/**
 * @method GET
 * @url /api/user/:id
 */
userRouter.get('/:id', async (req: express.Request, res: express.Response) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ where: { id } });
    res.send({
      user,
    });
  } catch (e) {
    console.error(e);
    sendError(res, { status: 500, message: 'Failed fetching user', debug: { id } });
  }
});

/**
 * @method PUT
 * @url /api/user/:id
 */
userRouter.put('/:id', async (req: express.Request, res: express.Response) => {
  const id = req.params.id;
  const payload = req.body as Partial<User>;
  try {
    const updated = await User.update({ id }, payload);
    res.send({
      updated: updated.raw.affectedRows,
    });
  } catch (e) {
    console.error(e);
    sendError(res, { status: 500, message: 'Failed updating user', debug: { id, payload } });
  }
});

/**
 * @method DELETE
 * @url /api/user/:id
 */
userRouter.delete('/:id', async (req: express.Request, res: express.Response) => {
  const id = req.params.id;
  try {
    const deleted = await User.delete({ id });
    res.send({
      deleted: deleted.affected,
    });
  } catch (e) {
    console.error(e);
    sendError(res, { status: 500, message: 'Failed deleting user', debug: { id } });
  }
});

export { userRouter };

