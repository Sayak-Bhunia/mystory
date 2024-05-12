'use client';
import { Open_Sans } from 'next/font/google';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from '../page.module.css';
import LocationDisplay from './LocationDisplay';
import Clock from 'react-live-clock';
import ChangingHello from './ChangingHello';
const openSans = Open_Sans({ subsets: ['latin'] });
const Sample = () => {
  return (
    <>
      <footer className={openSans.className}>
        <div className='flex flex-col-reverse items-center justify-between space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-12 border-t border-t-neutral-300 dark:border-neutral-700'>
          <div className='flex flex-col items-center justify-between pt-16 md:pt-0'>
            <h2 className='text-4xl md:text-6xl font-bold text-center md:text-left pb-2'>
              mystory
            </h2>
            <p className='text-gray-400 text-center'>
              A way to share stories anonymously.
            </p>
            <div className='flex mt-4 space-x-4 items-center justify-center md:items-start md:justify-start'>
              <a href='https://twitter.com/girlscriptsoc' target='_blank'>
                <FaXTwitter className='dark:text-white text-2xl' />
              </a>
              <a href='https://www.instagram.com/raw_shots29/' target='_blank'>
                <FiInstagram className='dark:text-white text-2xl ' />
              </a>
              <a href='https://www.linkedin.com/in/sayak-bhunia-452419252/' target='_blank'>
                <FaLinkedin className='dark:text-white text-2xl ' />
              </a>
              <a href='https://github.com/Sayak-Bhunia/mystory/' target='_blank'>
                <FaGithub className='dark:text-white text-2xl ' />
              </a>
            </div>
          </div>
          <ChangingHello />
        </div>

        <div className='pb-8'>
          <p className='text-sm dark:text-neutral-400 text-center'>
            &copy; {new Date().getFullYear()} mystory | All rights reserved.
          </p>
          <p className='text-center dark:text-neutral-400 text-lg font-bold space-x-2 mt-2'>
            <LocationDisplay />
            <span className={styles['glow-circle']}></span>
            <Clock format={'h:mma'} ticking={true} />
          </p>
        </div>
      </footer>
    </>
  );
};

export default Sample;
