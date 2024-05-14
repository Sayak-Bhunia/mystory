'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';
const FormSchema = z.object({
  email: z.string().email(),
  username: z.string().min(2, {
    message: 'username must contain more tan 2 characters',
  }),
  password: z
    .string()
    .min(4, {
      message: 'password should be more than 4 characters long',
    })
    .max(12),
});
const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
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
      const validatedData = FormSchema.parse(formData);
      const res = await fetch('/api/Users', {
        method: 'POST',
        body: JSON.stringify({ formData }),
        'content-type': 'application/json',
      });

      if (!res.ok) {
        const response = await res.json();
        setErrorMessage(response.message);
      } else {
        router.refresh();
        router.push('/');
      }
    } catch (error) {
      const errorMessages = JSON.parse(error.message).map((err) => err.message);
      toast.error(errorMessages.join(', '));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
          <h1 className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
            Sign In
          </h1>

          <div className="flex justify-center mb-6">
            <button className="px-4 py-2 mr-4 text-white bg-red-600 rounded-lg hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600">
              Sign In with Google
            </button>
            <button className="px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              Sign In with GitHub
            </button>
          </div>

          <div className="flex justify-center mb-6">
            <span className="text-gray-600 dark:text-gray-400">
              or sign in with credentials
            </span>
          </div>

          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-1 text-gray-600 dark:text-gray-400"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.username}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-purple-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 text-gray-600 dark:text-gray-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.email}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-purple-600"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 text-gray-600 dark:text-gray-400"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                required={true}
                value={formData.password}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-purple-600"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-purple-700 dark:hover:bg-purple-600 dark:focus:ring-purple-600"
            >
              Sign Up
            </button>
          </form>

          {errorMessage && (
            <p className="mt-4 text-center text-red-500 dark:text-red-400">
              {errorMessage}
            </p>
          )}

          <div className="mt-6 text-center">
            If you already have an Account please{' '}
            <a
              href="/signin"
              className="text-indigo-600 hover:text-indigo-800 hover:underline dark:text-purple-400 dark:hover:text-purple-300"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>

      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default UserForm;
