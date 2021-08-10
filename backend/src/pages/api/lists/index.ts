import { request, Request, Response } from 'express';
import nc from 'next-connect';
import listController from 'controllers/listController';

const handler = nc()
  .get(async (request: Request, response: Response) => {
    return await listController.getAll(response);
  })
  .post(async (request: Request, response: Response) => {
    return await listController.create(request, response);
  });
export default handler;
