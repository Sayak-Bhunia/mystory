'use client';
import { Open_Sans } from 'next/font/google';
import { IoMdMail } from "react-icons/io";
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
        <div className="flex flex-col-reverse items-center justify-between space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-12 border-t border-t-neutral-300 dark:border-neutral-700">
          <div className="flex flex-col items-center md:items-start justify-start pt-16 md:pl-24 md:pt-0">
            <h2 className="text-4xl md:text-6xl font-bold text-center md:text-left pb-2">
              <img src="/mystory-new-logo/mystory-logo.svg" alt="MyStory Logo" />
            </h2>

            <p className="text-gray-400 text-center">
              A way to share stories anonymously.
            </p>
            <div className="flex mt-3 space-x-3 items-baseline justify-center md:items-start md:justify-start">
              <a href="https://twitter.com/" target="_blank">
                <div className="group px-2.5 py-2.5 border border-[#616161] rounded hover:border-opacity-10 transition-opacity duration-1000">
                  <FaXTwitter className="dark:text-white text-2xl group-hover:scale-125 transition-[transform] duration-300" />
                </div>
              </a>
              <a href="https://www.instagram.com/raw_shots29/" target="_blank">
                <div className="group px-2.5 py-2.5 border border-[#616161] rounded hover:border-opacity-20">
                  <FiInstagram className="dark:text-white text-2xl group-hover:scale-125 transition-[transform] duration-300" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/sayak-bhunia-452419252/"
                target="_blank"
              >
                <div className="group px-2.5 py-2.5 border border-[#616161] rounded hover:border-opacity-20">
                  <FaLinkedin className="dark:text-white text-2xl group-hover:scale-125 transition-[transform] duration-300" />
                </div>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sbhunia2903@gmail.com"
                target="_blank"
              >
                <div className="group px-2.5 py-2.5 border border-[#616161] rounded hover:border-opacity-20">
                  <IoMdMail className="dark:text-white text-2xl group-hover:scale-125 transition-[transform] duration-300" />
                </div>
              </a>
              <a
                href="https://github.com/Sayak-Bhunia/mystory/"
                target="_blank"
              >
                <div className="group px-2.5 py-2.5 border border-[#616161] rounded hover:border-opacity-20">
                  <FaGithub className="dark:text-white text-2xl group-hover:scale-125 transition-[transform] duration-300" />
                </div>
              </a>
            </div>
            <a
              href="/docs/privacy-policy"
              className="text-md text-neutral-500 uppercase mt-2 hover:underline hover:underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="/docs/terms"
              className="text-md text-neutral-500 uppercase hover:underline hover:underline-offset-4"
            >
              TERMS AND CONDITIONS
            </a>
          </div>
          <ChangingHello />
        </div>

        <div className="pb-8">
          <p className="text-sm dark:text-neutral-400 text-center">
          &copy; {new Date().getFullYear()} mystory | All rights reserved.
          </p>
          <p className="text-center dark:text-neutral-400 text-lg font-bold space-x-2 mt-2">
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
