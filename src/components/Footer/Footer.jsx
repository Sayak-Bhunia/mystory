'use client';
import { Open_Sans } from 'next/font/google';
import { IoMdMail } from 'react-icons/io';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa';
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
          <div className="flex flex-col items-center md:items-start justify-start pt-16 md:pl-16 md:pt-0">
            <h2 className="text-4xl md:text-6xl font-bold text-center md:text-left pb-2">
              <img
                src="/mystory-new-logo/mystory-logo.svg"
                alt="MyStory Logo"
              />
            </h2>

            <p className="px-4 mr-14">
              A platform where you can share your stories anonymously without
              fear of judgment.Connect with others, find support, and read
              experiences from people just like you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Quick Links
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/contributors" className="hover:underline">
                    Contributors
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/faqs" className="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Others</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <a href="/search" className="hover:underline">
                    Search
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/settings" className="hover:underline">
                    Settings
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/signin" className="hover:underline">
                    Login/Signup
                  </a>
                </li>
                <li>
                  <a href="/confess" className="hover:underline">
                    Confess
                  </a>
                </li>
              </ul>
            </div>
            <div className="-mt-20 lg:mt-0">
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="/docs/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/docs/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pb-8 flex space-x-10 px-20">
          <div>
            <p className="text-sm  dark:text-neutral-400 text-center">
              &copy; {new Date().getFullYear()} mystory | All rights reserved.
            </p>
            <p className="text-center  dark:text-neutral-400 text-lg font-bold space-x-2 mt-2">
              <LocationDisplay />
              <span className={styles['glow-circle']}></span>
              <Clock format={'h:mma'} ticking={true} />
            </p>
          </div>
          <div className="flex mt-6 pl-56 space-x-4 items-baseline justify-center md:items-start md:justify-start">
            <a href="https://twitter.com/" target="_blank">
              <FaXTwitter className="dark:text-white text-2xl" />
            </a>
            <a href="https://www.instagram.com/raw_shots29/" target="_blank">
              <FiInstagram className="dark:text-white text-2xl " />
            </a>
            <a
              href="https://www.linkedin.com/in/sayak-bhunia-452419252/"
              target="_blank"
            >
              <FaLinkedin className="dark:text-white text-2xl " />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sbhunia2903@gmail.com"
              target="_blank"
            >
              <IoMdMail className="dark:text-white text-2xl " />
            </a>
            <a href="https://github.com/Sayak-Bhunia/mystory/" target="_blank">
              <FaGithub className="dark:text-white text-2xl " />
            </a>
            <a href="https://discord.com/" target="_blank">
              <FaDiscord className="dark:text-white text-2xl " />
            </a>
          </div>
          <div className="pl-10">
            <ChangingHello />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Sample;
