import '../globals.css';
import { Open_Sans } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const inter = Open_Sans({ subsets: ['latin'] });

const thankyouList = [
  'thank you',
  'gracias',
  'धन्यवाद',
  'merci',
  'danke',
  'ありがとう',
  '谢谢',
  'Спасибо',
  'شكراً',
  '감사합니다',
];

export default function Footer() {
  const [currthank, setCurrThank] = useState(thankyouList[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = thankyouList.indexOf(currthank);
      const nextIndex = (currentIndex + 1) % thankyouList.length;
      setCurrThank(thankyouList[nextIndex]);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [currthank]);

  return (
    <>
      <footer>
        <div className='flex flex-col-reverse items-center justify-between space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-12'>
          <div className='flex flex-col items-center justify-center'>
            <div className='p-8 md:p-0'>
              <h2 className='text-4xl font-bold text-center md:text-left'>mystory</h2>
              <p className='text-gray-400 text-center'>
                A way to share stories anonymously.
              </p>
              <div className='flex mt-4 space-x-4 items-center justify-center md:items-start md:justify-start'>
                <a href='/' target='_blank'>
                  <FiTwitter className='text-white ' />
                </a>
                <a href='/' target='_blank'>
                  <FiInstagram className='text-white ' />
                </a>
                <a href='/' target='_blank'>
                  <FaLinkedin className='text-white ' />
                </a>
                <a href='/' target='_blank'>
                  <FaGithub className='text-white ' />
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center text-6xl font-semibold'>
            <p>
              {currthank === 'شكراً' && '!'} {currthank}{' '}
              {currthank !== 'شكراً' && '!'}
            </p>
          </div>
        </div>

        <div className='py-8 border-t border-gray-600 '>
          <p className='text-sm text-gray-500 text-center'>
            &copy; {new Date().getFullYear()} mystory. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
