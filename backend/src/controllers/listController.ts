import { IListAttributes } from 'models/list/list.d';
import { List } from 'models';
import { listSchema } from 'utils/validates/index';
import { Request, Response } from 'express';
import CommunicationHandler from 'utils/handlers/CommunicationHandler';
import { isValidObjectId, Types } from 'mongoose';

type SecurityQuery = {
  _id: string;
};

class listController {
  static getAll = async (response: Response) => {
    try {
      const lists = await List.getLists();

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! List has been found',
        lists
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
      const list = await List.findListById(_id);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! List has been found',
        list
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(error, error.message);
    }
  };

  static create = async (request: Request, response: Response) => {
    try {
      const validatedList: IListAttributes = await listSchema.validateAsync({
        ...request.body,
      });
      const saveList = await List.addList(validatedList);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! List has been created',
        saveList
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(error, error.message);
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
      const validatedList: IListAttributes = await listSchema.validateAsync({
        ...request.body,
      });
      const saveList = await List.updateListById(_id, validatedList);

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
      await List.deleteListById(_id);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! List has been removed'
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };
}

export default listController;