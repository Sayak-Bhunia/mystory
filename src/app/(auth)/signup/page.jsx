'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
export default function SignPage() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const router = useRouter();
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      toast.loading('Server running...');
      const response = await axios({
        method: 'post',
        url: '/api/auth/signup',
        data: user,
      });

      console.log(response.data);
      toast.success('Success | 200');
      router.push('/confess');
    } catch (error) {
      console.log('SignUp failed');
    }
  };

  useEffect(() => {
    if (user.email !== '' && user.password !== '' && user.username !== '') {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Toaster />
      <h1 className="text-4xl my-4 font-semibold">
        {isLoading ? 'Loading...' : 'SignUp'}
      </h1>
      <div className="flex flex-col items-start justify-start">
        <label htmlFor="username" className="text-2xl my-4 text-green-400">
          Username
        </label>
        <input
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          type="text"
          title="username"
          placeholder="username"
          className="bg-transparent py-4 px-20 pl-4 border border-green-800 rounded-lg focus:outline-none font-bold"
        />

        <label htmlFor="password" className="text-2xl my-4 text-green-400">
          Password
        </label>
        <input
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          title="password"
          placeholder="password"
          className="bg-transparent py-4 px-20 pl-4 border border-green-800 rounded-lg focus:outline-none"
        />
      </div>

      <a href="/auth/signin" className="text-green-600 mt-4 mb-2">
        Already a member? Login Here
      </a>

      {isButtonDisabled ? (
        <button className="bg-green-950 text-green-700 text-center py-4 px-20 transition-all duration-200 rounded-lg my-4 font-bold">
          Disabled
        </button>
      ) : (
        <button
          onClick={onSignUp}
          className="bg-green-950 text-white hover:bg-black border border-green-900 hover:border-[#616161] text-center py-4 px-20 transition-all duration-200 rounded-lg my-4 font-bold"
        >
          Submit
        </button>
      )}
    </div>
  );
}
