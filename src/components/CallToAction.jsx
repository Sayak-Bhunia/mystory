'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CallToAction() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      <div
        data-aos='fade-in'
        className='flex flex-col items-center justify-between sm:justify-center rounded-lg my-12'
      >
        <img
          src='/getStarted.svg'
          alt='getStarted'
          className='h-auto w-96 object-cover'
        />
        <div className='inline-flex'>
          <a
            href='/get-started'
            className='text-3xl font-semibold py-2 px-6 rounded-lg bg-white  text-purple-600 '
          >
            Get Started
          </a>
          <div>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-purple-500'></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
