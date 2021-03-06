import { IMaillingAttributes } from 'models/mailling/mailling.d';
import { Mailling, SubscriberList, Template } from 'models';
import { maillingSchemaValidation } from 'utils/validates/index';
import { Request, Response } from 'express';
import CommunicationHandler from 'utils/handlers/CommunicationHandler';
import { isValidObjectId } from 'mongoose';

type SecurityQuery = {
  _id: string;
};

class maillingController {
  static getAll = async (response: Response) => {
    try {
      const maillings = await Mailling.getMaillings();

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Mailling has been found',
        maillings
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
      const mailling = await Mailling.findMaillingById(_id);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Mailling has been found',
        mailling
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };

  static create = async (request: Request, response: Response) => {
    try {
      const validatedMailling: IMaillingAttributes =
        await maillingSchemaValidation.validateAsync({
          ...request.body,
        });

      const { subscriberListsIds, templateId } = validatedMailling;

      const foundTemplate = await Template.findTemplateById(templateId);

      if (!foundTemplate) {
        return CommunicationHandler.responseWithError(
          response,
          'Error! Not found Template'
        );
      }

      const foundSubscriberLists =
        await SubscriberList.findSubscriberListsByIds(subscriberListsIds);

      if (
        foundSubscriberLists &&
        foundSubscriberLists.length !== subscriberListsIds.length
      ) {
        return CommunicationHandler.responseWithError(
          response,
          'Error! Not found list'
        );
      }

      const saveMailling = await Mailling.addMailling(validatedMailling);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Mailling has been created',
        saveMailling
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
      const validatedMailling: IMaillingAttributes =
        await maillingSchemaValidation.validateAsync({
          ...request.body,
        });

      const { subscriberListsIds, templateId } = validatedMailling;

      const foundTemplate = await Template.findTemplateById(templateId);
      console.log(foundTemplate);
      if (!foundTemplate) {
        return CommunicationHandler.responseWithError(
          response,
          'Error! Not found Template'
        );
      }

      const foundSubscriberLists =
        await SubscriberList.findSubscriberListsByIds(subscriberListsIds);

      if (
        foundSubscriberLists &&
        foundSubscriberLists.length !== subscriberListsIds.length
      ) {
        return CommunicationHandler.responseWithError(
          response,
          'Error! Not found list'
        );
      }

      const saveMailling = await Mailling.updateMaillingById(
        _id,
        validatedMailling
      );

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Mailling has been updated',
        saveMailling
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
      await Mailling.deleteMaillingById(_id);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Mailling has been removed'
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };
}

export default maillingController;
