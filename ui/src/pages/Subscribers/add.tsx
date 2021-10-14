import React, { useRef } from 'react';
import Layout from '../../components/Layout';
// import { useFetch } from '../../hooks/useFetch';
import subscriberService from '../../services/subscriberService';

export default function AddSubscriber() {
  const subscriberForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(subscriberForm.current);

    const payload = {
      name: form.get('name'),
      email: form.get('email'),
    };

    console.log(payload);

    const { data } = subscriberService.getAll();
    console.log(data);
  };

  return (
    <Layout title="Dodaj Subskrybenta">
      <div className="flex  justify-center ">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/2 lg:w-1/2 sm:w-1/2">
          <form ref={subscriberForm} onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block" htmlFor="Name">
                Imię i nazwisko:
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Dodaj subskrybenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
