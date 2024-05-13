'use client';
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';

const Confess = () => {
  const [username, setUsername] = useState('');
  const [confessions, setConfessions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.loading('Fetching confessions...');

    const filterParams = new URLSearchParams();

    if (startDate) {
      filterParams.append('startDate', startDate);
    }

    if (endDate) {
      filterParams.append('endDate', endDate);
    }

    try {
      const response = await axios.get(
        `/api/confession/advanced?username=${username}&${filterParams.toString()}`
      );
      const formattedConfessions = response.data.data.map((confession) => ({
        ...confession,
        date: formatDateTime(confession.date),
      }));
      setConfessions(formattedConfessions);
      toast.dismiss();
      toast.success('Confessions fetched successfully 🎉');
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
    <div className='py-32 h-fit dark:bg-neutral-800 flex flex-col justify-center items-center'>
      <Toaster />
      <div className='max-w-sm lg:max-w-md w-full bg-neutral-100 dark:bg-neutral-700/50 p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-6'>Confess Anonymously</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='username' className='block mb-2'>
              Username
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full px-3 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg focus:outline-none focus:ring focus:border-neutral-400'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='startDate' className='block mb-2'>
              Start Date
            </label>
            <input
              type='date'
              id='startDate'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className='w-full px-3 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg focus:outline-none focus:ring focus:border-neutral-400'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='endDate' className='block mb-2'>
              End Date
            </label>
            <input
              type='date'
              id='endDate'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className='w-full px-3 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg focus:outline-none focus:ring focus:border-neutral-400'
            />
          </div>
          <button
            type='submit'
            className='w-full text-white bg-purple-500 hover:bg-purple-600 font-bold py-2 px-4 rounded-lg flex items-center justify-center'
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Fetch Confessions'}
          </button>
        </form>
      </div>
      {!isLoading && confessions.length !== 0 ? (
        <div className='mt-6 w-80'>
          <h3 className='text-lg font-bold mb-2'>{username}</h3>
          <div className=''>
            {confessions.map((confession, index) => (
              <div
                key={index}
                className='flex flex-col items-start justify-start my-4 p-4 rounded-lg dark:bg-neutral-900/40'
              >
                <p className='text-3xl mb-2 font-semibold'>
                  {confession.content}
                </p>
                <div className='text-sm dark:text-neutral-200 text-neutral-700 flex items-center justify-start'>
                  <p>{confession.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center py-12'>
          <p className='font-semibold'>No Confessions found</p>
          <Image src={'/error.svg'} width={400} height={400} alt='Not Found' />
        </div>
      )}
    </div>
  );
};

export default Confess;
