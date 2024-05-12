'use client';
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

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
      setConfessions(response.data.data);
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

  return (
    <div className='py-32 h-fit  dark:bg-neutral-800 flex flex-col-reverse lg:flex-row justify-center items-center'>
      <Toaster />
      <div className='max-w-sm lg:max-w-md w-full bg-neutral-100 dark:bg-neutral-800 p-8 rounded-lg shadow-lg'>
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
          <button
            type='submit'
            className='w-full text-white bg-purple-500 hover:bg-purple-600 font-bold py-2 px-4 rounded-lg flex items-center justify-center'
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Fetch Confessions'}
          </button>
        </form>
        {confessions.length != 1 && (
          <div className='mt-6'>
            <h3 className='text-lg font-bold mb-2'>
              Confessions by {username}:
            </h3>
            <ul className='list-disc pl-6'>
              {confessions.map((confession, index) => (
                <li key={index}>{confession.content}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Confess;
