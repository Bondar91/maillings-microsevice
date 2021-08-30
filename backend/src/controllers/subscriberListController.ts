import { ISubscriberListAttributes } from 'models/subscriberList/subscriberList.d';
import { SubscriberList, Subscriber } from 'models';
import { subscriberListSchemaValidation } from 'utils/validates/index';
import { Request, Response } from 'express';
import CommunicationHandler from 'utils/handlers/CommunicationHandler';
import { isValidObjectId, Types } from 'mongoose';

type SecurityQuery = {
  _id: string;
};

class subscriberListController {
  static getAll = async (response: Response) => {
    try {
      const subscriberLists = await SubscriberList.getLists();

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! List has been found',
        subscriberLists
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
      const subscriberList = await SubscriberList.findListById(_id);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! List has been found',
        subscriberList
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };

  static create = async (request: Request, response: Response) => {
    try {
      const validatedSubscriberList: ISubscriberListAttributes =
        await subscriberListSchemaValidation.validateAsync({
          ...request.body,
        });

      const { subscribersIds } = validatedSubscriberList;
      const foundSubscribers = await Subscriber.findSubscribersByIds(
        subscribersIds
      );

      if (
        foundSubscribers &&
        foundSubscribers.length !== subscribersIds.length
      ) {
        return CommunicationHandler.responseWithError(
          response,
          'Error! Not found subscriber'
        );
      }

      const saveList = await SubscriberList.addList(validatedSubscriberList);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! List has been created',
        saveList
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
      const validatedSubscriberList: ISubscriberListAttributes =
        await subscriberListSchemaValidation.validateAsync({
          ...request.body,
        });

      const { subscribersIds } = validatedSubscriberList;
      const foundSubscribers = await Subscriber.findSubscribersByIds(
        subscribersIds
      );

      if (foundSubscribers.length !== subscribersIds.length) {
        return CommunicationHandler.responseWithError(
          response,
          'Error! Not found subscriber'
        );
      }

      const saveList = await SubscriberList.updateListById(
        _id,
        validatedSubscriberList
      );

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! List has been updated',
        saveList
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
      await SubscriberList.deleteListById(_id);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! List has been removed'
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };
}

export default subscriberListController;
