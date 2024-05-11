'use client';
import { useState, useEffect } from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { format } from 'date-fns';
import { Open_Sans } from 'next/font/google';
import styles from './page.module.css';

const openSans = Open_Sans({ subsets: ['latin'] });

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
  const [currentTime, setCurrentTime] = useState(
    format(new Date(), 'hh:mm:ss a')
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDateTime = new Date();
      setCurrentTime(format(currentDateTime, 'hh:mm:ss a'));
      const currentIndex = thankyouList.indexOf(currthank);
      const nextIndex = (currentIndex + 1) % thankyouList.length;
      setCurrThank(thankyouList[nextIndex]);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [currthank]);

  return (
    <>
      <footer>
        <div className='flex flex-col-reverse items-center justify-between space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-12 border-t border-neutral-600'>
          <div className='flex flex-col items-center justify-between pt-16 md:pt-0'>
            <h2 className='text-4xl md:text-6xl font-bold text-center md:text-left pb-2'>
              mystory
            </h2>
            <p className='text-gray-400 text-center'>
              A way to share stories anonymously.
            </p>
            <div className='flex mt-4 space-x-4 items-center justify-center md:items-start md:justify-start'>
              <a href='/' target='_blank'>
                <FaXTwitter className='text-white ' />
              </a>
              <a href='/' target='_blank'>
                <FiInstagram className='text-white ' />
              </a>
              <a href='/' target='_blank'>
                <FaLinkedin className='text-white ' />
              </a>
              <a
                href='https://github.com/Sayak-Bhunia/mystory/'
                target='_blank'
              >
                <FaGithub className='text-white ' />
              </a>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center text-6xl font-semibold'>
            <p>
              {currthank === 'شكراً' && '!'} {currthank}{' '}
              {currthank !== 'شكراً' && '!'}
            </p>
          </div>
        </div>

        <div className='pb-16 sm:pb-10 flex flex-col items-center justify-center'>
          <p className='text-sm text-neutral-400 text-center py-2'>
            &copy; {new Date().getFullYear()} mystory. All rights reserved.
          </p>
          <p className='text-center text-neutral-400 text-lg font-bold inline-flex items-center justify-center'>
            <span className={styles['glow-circle']}></span>
            <span className='text-neutral-500 pl-2'>{currentTime}</span>
          </p>
        </div>
      </footer>
    </>
  );
}
