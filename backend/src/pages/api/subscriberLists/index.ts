import { request, Request, Response } from 'express';
import nc from 'next-connect';
import subscriberListController from 'controllers/subscriberListController';

const handler = nc()
  .get(async (request: Request, response: Response) => {
    return await subscriberListController.getAll(response);
  })
  .post(async (request: Request, response: Response) => {
    return await subscriberListController.create(request, response);
  });
export default handler;
