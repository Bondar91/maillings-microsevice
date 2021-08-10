import { Request, Response } from 'express';
import nc from 'next-connect';
import maillingController from 'controllers/maillingController';

const handler = nc()
  .get(async (request: Request, response: Response) => {
    return await maillingController.findOneById(request, response);
  })
  .put(async (request: Request, response: Response) => {
    return await maillingController.update(request, response);
  })
  .delete(async (request: Request, response: Response) => {
    await maillingController.remove(request, response);
  });

export default handler;
