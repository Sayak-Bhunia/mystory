'use client';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { z } from 'zod';
import BackToTop from './BackToTop';

const FormSchema = z.object({
  username: z.string(),
});
const Settings = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      setLoading(true);
      const validatedData = FormSchema.parse(formData);
      console.log(validatedData);
      const res = await fetch('api/settings', {
        method: 'POST',
        body: JSON.stringify(validatedData.username),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message);
        setLoading(false);
      } else {
        setLoading(false);
        router.refresh();
        formData.username = '';
        toast.success(data.message);
      }
    } catch (error) {
      setLoading(false);
      const errorMessages = JSON.parse(error.message).map((err) => err.message);
      toast.error(errorMessages.join(', '));
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-96">
        <div className="w-full max-w-md px-8 py-12 mt-20 mx-5 bg-white rounded-lg shadow-lg dark:bg-[#000000] border-[1px] border-gray-500 dark:text-white">
          <h2 className="text-2xl font-bold mb-6">Settings</h2>
          <hr className=" mb-3" />
          <div className="flex flex-col text-center justify-center mb-6">
            <span className="text-gray-600 dark:text-gray-400">
              Change username
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col gap-4"
          >
            <div>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required={true}
                value={formData.username}
                className="w-full px-3 py-2 bg-[#000000] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-[#000000] dark:text-white dark:border-gray-600 dark:focus:ring-purple-600"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-purple-500 hover:bg-purple-600 font-bold py-2 px-4 rounded-lg flex items-center justify-center"
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
          {errorMessage && (
            <p className="mt-4 text-center text-red-500 dark:text-red-400">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default Settings;