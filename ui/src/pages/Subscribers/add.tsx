import React, { useRef } from 'react';
import Layout from '../../components/Layout';
import subscriberService from '../../services/subscriberService';
import { Formik, Form } from 'formik';
import { subscriberValidationSchema } from '../../schemas/subscriberValidationSchema';

export interface IFormValues {
  name: string;
  email: string;
}

export default function AddSubscriber() {
  // const subscriberForm = useRef();

  const handleSubmit = async (values: IFormValues) => {
    console.log('values', values);

    return values;

    // const { data } = subscriberService.create(values);
  };

  return (
    <Layout title="Dodaj Subskrybenta">
      <div className="flex  justify-center ">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/2 lg:w-1/2 sm:w-1/2">
          <Formik
            initialValues={{
              name: '',
              email: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={subscriberValidationSchema}
          >
            {({ values, errors, handleBlur, handleChange }) => (
              <Form>
                <div className="mt-4">
                  <label className="block" htmlFor="Name">
                    Imię i nazwisko:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Imię i nazwisko"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                  {errors.name}
                </div>
                <div className="mt-4">
                  <label className="block" htmlFor="email">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                  {errors.email}
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  >
                    Dodaj subskrybenta
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
}
