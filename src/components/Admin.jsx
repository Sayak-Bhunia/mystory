'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const AdminPage = () => {
  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('api/get-confessions');
      const data = await response.json();
      const confessions = data.message;
      console.log(confessions);
      setConfessions(confessions);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong');
      console.error('Error fetching confessions:', error);
    }
  };

  return (
    <div className="grid grid-rows items-center justify-center h-auto m-32">
      {confessions.length !== 0 && (
        <div className="mt-6 w-80">
          <h3 className="flex text-lg font-bold mb-2">Confessions</h3>
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
      <button
        type="submit"
        className="w-full text-white bg-purple-500 hover:bg-purple-600 font-bold py-2 px-4 rounded-lg flex items-center justify-center"
        onClick={fetchData}
      >
        {!loading ? `Show Confessions` : `Loading...`}
      </button>
    </div>
  );
};
