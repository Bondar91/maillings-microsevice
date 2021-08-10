import { Request, Response } from 'express';
import nc from 'next-connect';
import templateController from 'controllers/templateController';

const handler = nc()
  .get(async (request: Request, response: Response) => {
    return await templateController.findOneById(request, response);
  })
  .put(async (request: Request, response: Response) => {
    return await templateController.update(request, response);
  })
  .delete(async (request: Request, response: Response) => {
    await templateController.remove(request, response);
  });

export default handler;
