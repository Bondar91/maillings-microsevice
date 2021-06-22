import { Request, Response } from 'express';
import nextconnect from 'next-connect';
import listController from 'controllers/listController';

const handler = nextconnect()
  .get(async (request: Request, response: Response) => {
    try {
      const lists = await listController.getAllAction();

      return response.json({
        error: false,
        data: lists,
      });
    } catch (error) {
      return response.json({
        error: true,
        message: error.message,
      });
    }
  })
  .post(async (request: Request, response: Response) => {
    try {
      const payload = request.body;
      const list = await listController.addAction(payload);

      return response.json({
        error: false,
        data: list,
      });
    } catch (error) {
      return response.json({
        error: true,
        message: error.message,
      });
    }
  });
export default handler;
