'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
export default function SignInPage() {
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
        url: '/api/auth/signin',
        data: user,
      });

      console.log(response.data);
      toast.dismiss();
      toast.success('Success | 200');
      router.push('/confess');
    } catch (error) {
      toast.dismiss();
      toast.error('Failed | 400');
      console.log('SignUp failed');
    }
    setTimeout(() => {
      toast.dismiss();
    }, 2000);
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
        <label
          htmlFor="username"
          className="text-2xl my-4 text-purple-400 font-semibold"
        >
          Username
        </label>
        <input
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          type="text"
          title="username"
          placeholder="username"
          className="bg-transparent py-4 px-20 pl-4 border border-purple-800 rounded-lg focus:outline-none font-bold"
        />

        <label
          htmlFor="password"
          className="text-2xl my-4 text-purple-400  font-semibold"
        >
          Password
        </label>
        <input
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          title="password"
          placeholder="password"
          className="bg-transparent py-4 px-20 pl-4 border border-purple-800 rounded-lg focus:outline-none"
        />
      </div>

      <a href="/auth/signin" className="text-purple-600 mt-4 mb-2">
        Already a member? Login Here
      </a>

      {isButtonDisabled ? (
        <button className="bg-purple-950 text-purple-700 text-center py-4 px-20 transition-all duration-200 rounded-lg my-4 font-bold">
          Disabled
        </button>
      ) : (
        <button
          onClick={onSignUp}
          className="bg-purple-950 text-white hover:bg-black border border-purple-900 hover:border-[#616161] text-center py-4 px-20 transition-all duration-200 rounded-lg my-4 font-bold"
        >
          Submit
        </button>
      )}
    </div>
  );
}
