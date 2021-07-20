import { ISubscriberAttributes } from 'models/subscriber/Subscriber.d';
import { Subscriber } from 'models';
import { subscriberSchema } from 'utils/validates/index';

class subscriberController {
  getAllAction() {
    return Subscriber.getSubscribers();
  }

  findOneAction(subscriberId: string) {
    return Subscriber.findSubscriber(subscriberId);
  }

  async addAction(subscriber: ISubscriberAttributes) {
    const validatedSubscriber = await subscriberSchema.validateAsync(
      subscriber
    );

    return Subscriber.addSubscriber(validatedSubscriber);
  }

  async updateAction(
    subscriberId: string,
    subscriberUpdate: ISubscriberAttributes
  ) {
    const validatedSubscriber = await subscriberSchema.validateAsync(
      subscriberUpdate
    );

    return Subscriber.updateSubscriber(subscriberId, validatedSubscriber);
  }

  deleteAction(subscriberId: string) {
    return Subscriber.deleteSubscriber(subscriberId);
  }
}

const controller = new subscriberController();

export default controller;
