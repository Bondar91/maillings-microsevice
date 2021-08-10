import { Response } from 'express';

class CommunicationHandler {
  static responseWithSuccess<T>(response: Response, msg: string, data?: T) {
    return response.json({
      error: false,
      message: msg,
      data,
    });
  }

  static responseWithError(response: Response, msg: string) {
    return response.json({
      error: true,
      message: msg,
    });
  }
}

export default CommunicationHandler;
