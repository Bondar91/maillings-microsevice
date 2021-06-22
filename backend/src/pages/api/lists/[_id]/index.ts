import { Request, Response, NextFunction } from 'express';
import nextconnect from 'next-connect';
import listController from 'controllers/listController';
import { IListAttributes } from 'models/list/list.d';

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
  .get(async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { _id } = request.query as SecurityQuery;
      const list = await listController.findOneAction(_id);

      if (!list) {
        return redirectToWithError(response, 'not-found');
      }

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
      const { name } = request.body as IListAttributes;
      const listUpdate = await listController.updateAction(_id, {
        name,
      });

      if (listUpdate === null) {
        return redirectToWithError(response, 'not-found');
      }

      return response.json({
        error: false,
        data: listUpdate,
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
      const foundList = await listController.findOneAction(_id);

      if (!foundList) {
        return redirectToWithError(response, 'not-found');
      }

      const listDelete = await listController.deleteAction(_id);

      if (!listDelete) {
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
