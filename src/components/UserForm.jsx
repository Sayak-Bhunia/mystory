'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
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
  const [showEye, setShowEye] = useState(true);
  const [showPass, setShowPass] = useState(false);

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

  const eyeToggle = () => {
    showPass ? setShowPass(false) : setShowPass(true);
    showEye ? setShowEye(false) : setShowEye(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-96">
        <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-lg dark:bg-[#303030] dark:text-white">
          <div className="flex justify-around items-center mb-6">
            <button
              className=" p-5 mr-4 text-white rounded-lg "
              onClick={async () => await signIn('google', { callbackUrl: '/' })}
            >
              <FcGoogle className=" h-10 w-10" />
            </button>
            <button
              className=" p-5 text-white  rounded-lg"
              onClick={async () => await signIn('github', { callbackUrl: '/' })}
            >
              <FaGithub className=" h-10 w-10" />
            </button>
          </div>
          <hr className=" mb-3" />
          <div className="flex flex-col text-center justify-center mb-6">
            <p className=" mb-2">OR</p>
            <span className="text-gray-600 dark:text-gray-400">
              Sign in with credentials
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
                placeholder="Username"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.username}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-[#505050] dark:text-white dark:border-gray-600 dark:focus:ring-purple-600"
              />
            </div>
            <div>
              <input
                placeholder="email"
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.email}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-[#505050] dark:text-white dark:border-gray-600 dark:focus:ring-purple-600"
              />
            </div>

            <div>
              <input
                placeholder="Password"
                id="password"
                name="password"
                type={showPass ? 'text' : 'password'}
                onChange={handleChange}
                required={true}
                value={formData.password}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-[#505050] dark:text-white dark:border-gray-600 dark:focus:ring-purple-600"
              />
              {!showEye ? (
                <FaEye
                  className="relative left-[90%] top-[-27px]"
                  onClick={eyeToggle}
                />
              ) : (
                <FaEyeSlash
                  className="relative left-[90%] top-[-27px]"
                  onClick={eyeToggle}
                />
              )}
            </div>

            <button
              type="submit"
              className="px-4 py-2 w-fit m-auto transition text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-purple-700 dark:hover:bg-purple-600 dark:focus:ring-purple-600"
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
            already have an Account ?{' '}
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
