import { ISubscriberAttributes } from 'models/subscriber/subscriber.d';
import { Subscriber } from 'models';
import { subscriberSchema } from 'utils/validates/index';
import { Request, Response } from 'express';
import CommunicationHandler from 'utils/handlers/CommunicationHandler';
import { isValidObjectId, Types } from 'mongoose';

type SecurityQuery = {
  _id: string;
};

class subscriberController {
  static getAll = async (response: Response) => {
    try {
      const subscribers = await Subscriber.getSubscribers();

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Subscriber has been found',
        subscribers
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };

  static findOneById = async (request: Request, response: Response) => {
    const { _id } = request.query as SecurityQuery;

    if (!isValidObjectId(_id)) {
      return CommunicationHandler.responseWithError(
        response,
        'Error! Incorrect id'
      );
    }

    try {
      const subscriber = await Subscriber.findSubscriberById(_id);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Subscriber has been found',
        subscriber
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };

  static create = async (request: Request, response: Response) => {
    try {
      const validatedSubscriber: ISubscriberAttributes =
        await subscriberSchema.validateAsync({
          ...request.body,
        });
      const saveSubscriber = await Subscriber.addSubscriber(
        validatedSubscriber
      );

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Subscriber has been created',
        saveSubscriber
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };

  static update = async (request: Request, response: Response) => {
    const { _id } = request.query as SecurityQuery;

    if (!isValidObjectId(_id)) {
      return CommunicationHandler.responseWithError(
        response,
        'Error! Incorrect id'
      );
    }

    try {
      const validatedSubscriber: ISubscriberAttributes =
        await subscriberSchema.validateAsync({
          ...request.body,
        });
      const saveSubscriber = await Subscriber.updateSubscriberById(
        _id,
        validatedSubscriber
      );

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Subscriber has been updated',
        saveSubscriber
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };

  static remove = async (request: Request, response: Response) => {
    const { _id } = request.query as SecurityQuery;

    if (!isValidObjectId(_id)) {
      return CommunicationHandler.responseWithError(
        response,
        'Error! Incorrect id'
      );
    }

    try {
      await Subscriber.deleteSubscriberById(_id);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Subscriber has been removed'
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };
}

export default subscriberController;
