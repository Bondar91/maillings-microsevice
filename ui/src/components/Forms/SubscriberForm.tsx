import React from 'react';
import { Formik, Form } from 'formik';
import { subscriberValidationSchema } from '../../schemas/subscriberValidationSchema';
import { useSubscribersFormFacade } from '../../hooks/useSubscribersFormFacade';
import { RenderSubscriberForm } from './RenderSubscriberForm';

export const SubscriberForm = () => {
  const { initialValues, handleSubmitForm } = useSubscribersFormFacade();
  return (
    <div className="flex  justify-center ">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/2 lg:w-1/2 sm:w-1/2">
        <Formik
          validateOnChange
          initialValues={initialValues}
          onSubmit={handleSubmitForm}
          validationSchema={subscriberValidationSchema}
        >
          {({ values, errors, handleBlur, handleChange }) => (
            <RenderSubscriberForm />
          )}
        </Formik>
      </div>
    </div>
  );
};
