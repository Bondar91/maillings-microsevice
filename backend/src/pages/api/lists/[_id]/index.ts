import { Request, Response } from 'express';
import nc from 'next-connect';
import listController from 'controllers/listController';

const handler = nc()
  .get(async (request: Request, response: Response) => {
    return await listController.findOneById(request, response);
  })
  .put(async (request: Request, response: Response) => {
    return await listController.update(request, response);
  })
  .delete(async (request: Request, response: Response) => {
    await listController.remove(request, response);
  });

export default handler;
