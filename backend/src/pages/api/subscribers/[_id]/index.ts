import { Request, Response } from 'express';
import nc from 'next-connect';
import subscriberController from 'controllers/subscriberController';

const handler = nc()
  .get(async (request: Request, response: Response) => {
    return await subscriberController.findOneById(request, response);
  })
  .put(async (request: Request, response: Response) => {
    return await subscriberController.update(request, response);
  })
  .delete(async (request: Request, response: Response) => {
    await subscriberController.remove(request, response);
  });

export default handler;
