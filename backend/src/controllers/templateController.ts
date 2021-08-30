import { ITemplateAttributes } from 'models/template/template.d';
import { Template } from 'models';
import { templateSchema } from 'utils/validates/index';
import { Request, Response } from 'express';
import CommunicationHandler from 'utils/handlers/CommunicationHandler';
import { isValidObjectId, Types } from 'mongoose';

type SecurityQuery = {
  _id: string;
};

class templateController {
  static getAll = async (response: Response) => {
    try {
      const templates = await Template.getTemplates();

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Template has been found',
        templates
      );
    } catch (error) {
      console.log(error);
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
      const template = await Template.findTemplateById(_id);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Template has been found',
        template
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };

  static create = async (request: Request, response: Response) => {
    try {
      const validatedTemplate: ITemplateAttributes =
        await templateSchema.validateAsync({
          ...request.body,
        });
      const saveTemplate = await Template.addTemplate(validatedTemplate);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Template has been created',
        saveTemplate
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
      const validatedTemplate: ITemplateAttributes =
        await templateSchema.validateAsync({
          ...request.body,
        });
      const saveTemplate = await Template.updateTemplateById(
        _id,
        validatedTemplate
      );

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Template has been updated',
        saveTemplate
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
      await Template.deleteTemplateById(_id);

      return CommunicationHandler.responseWithSuccess(
        response,
        'Success! Template has been removed'
      );
    } catch (error) {
      return CommunicationHandler.responseWithError(response, error.message);
    }
  };
}

export default templateController;
