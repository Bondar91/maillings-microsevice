import { request, Request, Response } from 'express';
import nc from 'next-connect';
import subscriberController from 'controllers/subscriberController';

const handler = nc()
  .get(async (request: Request, response: Response) => {
    return await subscriberController.getAll(response);
  })
  .post(async (request: Request, response: Response) => {
    return await subscriberController.create(request, response);
  });

export default handler;
