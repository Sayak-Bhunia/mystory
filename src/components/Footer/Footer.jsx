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
      <footer className={`${openSans.className} px-4 md:px-12`}>
        <div className="flex flex-col-reverse items-center justify-between space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-12 border-t border-t-neutral-300 dark:border-neutral-700">
          <div className="flex flex-col items-center md:items-start justify-start pt-16 md:pl-16 md:pt-0">
            <h2 className="text-4xl md:text-6xl font-bold text-center md:text-left pb-2">
              <img
                src="/mystory-new-logo/mystory-logo.svg"
                alt="MyStory Logo"
              />
            </h2>
            <p className="px-4 md:mr-14 text-center md:text-left">
              A platform where you can share your stories anonymously without
              fear of judgment. Connect with others, find support, and read
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
              <ul className="font-medium">
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
            <div className="lg:mt-0">
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

        <div className="flex flex-col md:flex-row items-center justify-between pb-8 space-y-6 md:space-y-0 px-4 md:px-20">
          <div className="text-center md:text-left">
            <p className="text-sm dark:text-neutral-400">
              &copy; {new Date().getFullYear()} mystory | All rights reserved.
            </p>
            <p className="dark:text-neutral-400 text-lg font-bold space-x-2 mt-2">
              <LocationDisplay />
              <span className={styles['glow-circle']}></span>
              <Clock format={'h:mma'} ticking={true} />
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://twitter.com/" target="_blank" aria-label="Twitter">
              <FaXTwitter className="dark:text-white text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/raw_shots29/"
              target="_blank"
              aria-label="Instagram"
            >
              <FiInstagram className="dark:text-white text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sayak-bhunia-452419252/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="dark:text-white text-2xl" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sbhunia2903@gmail.com"
              target="_blank"
              aria-label="Mail"
            >
              <IoMdMail className="dark:text-white text-2xl" />
            </a>
            <a
              href="https://github.com/Sayak-Bhunia/mystory/"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub className="dark:text-white text-2xl" />
            </a>
            <a href="https://discord.com/" target="_blank" aria-label="Discord">
              <FaDiscord className="dark:text-white text-2xl" />
            </a>
          </div>
          <div className="text-center md:text-left">
            <ChangingHello />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Sample;
