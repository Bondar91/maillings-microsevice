import { request, Request, Response } from 'express';
import nc from 'next-connect';
import maillingController from 'controllers/maillingController';

const handler = nc()
  .get(async (request: Request, response: Response) => {
    return await maillingController.getAll(response);
  })
  .post(async (request: Request, response: Response) => {
    return await maillingController.create(request, response);
  });

export default handler;
