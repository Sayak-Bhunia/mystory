'use client';
import { FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { z } from 'zod';
import BackToTop from './BackToTop';
const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2, {
    message: 'username must contain more than 2 characters',
  }),
  password: z
    .string()
    .min(4, {
      message: 'password should be more than 4 characters long',
    })
    .max(12),
});
const SignInForm = () => {
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
      const res = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
        callbackUrl: '/signin',
      });

      // console.log(res);
      if (!res.ok) {
        setErrorMessage('Wrong credentials');
      } else {
        router.refresh();
        router.push('/');
      }
    } catch (error) {
      const errorMessages = JSON.parse(error.message).map((err) => err.message);
      toast.error(errorMessages.join(', '));
      console.log(error);
    }
  };

  const eyeToggle = () => {
    showPass ? setShowPass(false) : setShowPass(true);
    showEye ? setShowEye(false) : setShowEye(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center my-52 w-80 md:w-96">
        <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-lg dark:bg-[#000000] border-gray-500 border-[1px] dark:text-white">
          <div className="flex justify-center items-center mb-3">
            <button
              className=" p-5 text-white rounded-lg "
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
          <div className="flex flex-col text-center justify-center mb-7">
            <p className=" mb-2">OR</p>
            <span className="text-gray-600 text-xl dark:text-gray-400">
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
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                onChange={handleChange}
                required={true}
                value={formData.email}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-[#000000] dark:text-white dark:border-gray-600 dark:focus:ring-purple-600"
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
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-[#000000] dark:text-white dark:border-gray-600 dark:focus:ring-purple-600"
              />
              {!showEye ? (
                <FaEyeSlash
                  className="relative left-[90%] top-[-27px]"
                  onClick={eyeToggle}
                />
              ) : (
                <FaEye
                  className="relative left-[90%] top-[-27px]"
                  onClick={eyeToggle}
                />
              )}
            </div>

            <button
              type="submit"
              className="px-4 py-2 w-fit m-auto transition text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-purple-700 dark:hover:bg-purple-600 dark:focus:ring-purple-600"
            >
              Sign In
            </button>
          </form>

          {errorMessage && (
            <p className="mt-4 text-center text-red-500 dark:text-red-400">
              {errorMessage}
            </p>
          )}
          <div className="mt-6 text-center">
            <a
              href="/signup"
              className="text-[#8F8F8F] hover:text-indigo-800 hover:underline dark:text-[#8F8F8F] dark:hover:text-purple-300"
            >
              Don&apos;t have an account?{' '}
              <span className=" text-blue-500">Sign up</span>
            </a>
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default SignInForm;
