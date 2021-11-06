import React from 'react';
import { useFormikContext, Form } from 'formik';
import { InitialDataModel } from '../../hooks/useSubscribersFormFacade';

export const RenderSubscriberForm = () => {
  const { values, errors, handleChange, handleBlur } =
    useFormikContext<InitialDataModel>();

  return (
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
        <span className="text-red-500">{errors.name}</span>
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
        <span className="text-red-500">{errors.email}</span>
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
  );
};
