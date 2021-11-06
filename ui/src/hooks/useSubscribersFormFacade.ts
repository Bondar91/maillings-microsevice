import { FormikHelpers } from 'formik';
import { SubscriberCommands } from '../services/subscribers/subscriberCommands';
import { NotificationsDispatch } from '../components';

export const useSubscribersFormFacade = () => {
  const subscriberCommands = new SubscriberCommands();

  const initialValues = {
    name: '',
    email: '',
  };

  const handleSubmitForm = async (
    values: InitialDataModel,
    formikHelpers: FormikHelpers<InitialDataModel>,
  ) => {
    const newSubscriber = {
      name: values.name,
      email: values.email,
    };
    return subscriberCommands
      .create(newSubscriber)
      .then((res) => {
        formikHelpers.resetForm();
        NotificationsDispatch({
          msg: res.message,
          variant: 'success',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { initialValues, handleSubmitForm };
};

export type InitialDataModel = {
  name: string;
  email: string;
};
