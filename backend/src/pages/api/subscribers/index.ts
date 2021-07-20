import { Request, Response } from 'express';
import nextconnect from 'next-connect';
import subscriberController from 'controllers/subscriberController';

const handler = nextconnect()
  .get(async (request: Request, response: Response) => {
    try {
      const subscribers = await subscriberController.getAllAction();

      return response.json({
        error: false,
        data: subscribers,
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
      const subscriber = await subscriberController.addAction(payload);

      return response.json({
        error: false,
        data: subscriber,
      });
    } catch (error) {
      return response.json({
        error: true,
        message: error.message,
      });
    }
  });
export default handler;
