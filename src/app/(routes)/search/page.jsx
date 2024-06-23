'use client';
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import CustomCursor from '@/components/ui/custom-cursor';

import BackToTop from '@/components/BackToTop';

const Confess = () => {
  const [username, setUsername] = useState('');
  const [confessions, setConfessions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.loading('Fetching confessions...');

    try {
      const response = await axios.get(`/api/confession?username=${username}`);
      const formattedConfessions = response.data.data.map((confession) => ({
        ...confession,
        date: formatDateTime(confession.date),
      }));
      setConfessions(formattedConfessions);
      toast.dismiss();
    } catch (error) {
      toast.error('An error occurred while fetching confessions 😢');
      console.error('Error fetching confessions:', error);
    }

    setIsLoading(false);
    setTimeout(() => {
      toast.dismiss();
    }, 3000);
  };

  // Function to format the date and time
  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    return dateTime.toLocaleDateString('en-US', options);
  };

  return (
    <>
      <CustomCursor />
      <div className="py-44 px-6 h-fit dark flex flex-col justify-center items-center">
        <Toaster />
        <div className="max-w-sm lg:max-w-md w-full border-neutral-100 dark:border-neutral-700/50 border-[1px] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Search</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder='enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border-neutral-200 dark:bg-[#030303] dark:border-neutral-700 border-[1px] rounded-lg focus:outline-none focus:ring focus:border-neutral-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-purple-500 hover:bg-purple-600 font-bold py-2 px-4 rounded-lg flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Fetch Confessions'}
            </button>
          </form>
          <div className="mt-6">
            <a href="/search/advanced">
              Want filters? Try
              <span className="py-1 px-2 ml-2 border-neutral-600 rounded hover:underline hover:underline-offset-2 font-bold">
                Advanced Search
              </span>
            </a>
          </div>
          {confessions.length !== 0 && (
            <div className="mt-6 w-80">
              <h3 className="text-lg font-bold mb-2">Confessions</h3>
              <div className="">
                {confessions.map((confession, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-start my-4 p-4 rounded-lg dark:bg-neutral-900/40"
                  >
                    <p className="text-3xl mb-4 font-semibold">
                      {confession.content}
                    </p>
                    <div className="text-[12px] dark:text-neutral-200 text-neutral-700 flex items-center justify-start">
                      <p>{confession.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <BackToTop />
    </div>
    </>
  );
};

export default Confess;
