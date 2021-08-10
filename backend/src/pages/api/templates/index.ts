import { request, Request, Response } from 'express';
import nc from 'next-connect';
import templateController from 'controllers/templateController';

const handler = nc()
  .get(async (request: Request, response: Response) => {
    return await templateController.getAll(response);
  })
  .post(async (request: Request, response: Response) => {
    return await templateController.create(request, response);
  });

export default handler;
