import { Request, Response } from 'express';
import nc from 'next-connect';
import subscriberListController from 'controllers/subscriberListController';

const handler = nc()
  .get(async (request: Request, response: Response) => {
    return await subscriberListController.findOneById(request, response);
  })
  .put(async (request: Request, response: Response) => {
    return await subscriberListController.update(request, response);
  })
  .delete(async (request: Request, response: Response) => {
    await subscriberListController.remove(request, response);
  });

export default handler;
