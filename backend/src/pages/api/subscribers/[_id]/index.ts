import { Request, Response } from 'express';
import nextconnect from 'next-connect';
import subscriberController from 'controllers/subscriberController';
import { ISubscriberAttributes } from 'models/subscriber/subscriber.d';

type SecurityQuery = {
  _id: string;
};

function redirectToWithError(
  response: Response,
  errorMessage: string = 'something-went-wrong'
) {
  return response.json({
    error: true,
    message: errorMessage,
  });
}

const handler = nextconnect()
  .get(async (request: Request, response: Response) => {
    try {
      const { _id } = request.query as SecurityQuery;
      const subscriber = await subscriberController.findOneAction(_id);

      if (!subscriber) {
        return redirectToWithError(response, 'not-found');
      }

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
  })
  .put(async (request: Request, response: Response) => {
    if (!request.query.hasOwnProperty('_id')) {
      return redirectToWithError(response, 'not-found');
    }
    const { _id } = request.query as SecurityQuery;

    if (_id.length === 0) {
      return redirectToWithError(response, 'has-to-be-correct-id');
    }

    try {
      const { name } = request.body as ISubscriberAttributes;
      const subscriberUpdate = await subscriberController.updateAction(_id, {
        name,
      });

      if (subscriberUpdate === null) {
        return redirectToWithError(response, 'not-found');
      }

      return response.json({
        error: false,
        data: subscriberUpdate,
      });
    } catch (error) {
      return response.json({
        error: true,
        message: error.message,
      });
    }
  })
  .delete(async (request: Request, response: Response) => {
    if (!request.query.hasOwnProperty('_id')) {
      return redirectToWithError(response, 'not-found');
    }

    const { _id } = request.query as SecurityQuery;

    if (_id.length === 0) {
      return redirectToWithError(response, 'has-to-be-correct-id');
    }

    try {
      const foundsubscriber = await subscriberController.findOneAction(_id);

      if (!foundsubscriber) {
        return redirectToWithError(response, 'not-found');
      }

      const subscriberDelete = await subscriberController.deleteAction(_id);

      if (!subscriberDelete) {
        return redirectToWithError(response, 'not-delete');
      }

      return response.json({
        error: false,
      });
    } catch (error) {
      return response.json({
        error: true,
        message: error.message,
      });
    }
  });

export default handler;
