'use client';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { getDataFromToken } from '@/helpers/getDataFromToken';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const smNavClass = `py-1 w-full rounded-full border 
  border-[#616161] hover:border-[#191919] text-center
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2 hover:w-[90%]`;

  const navClass = `py-1  rounded-full border 
  border-[#616161] hover:border-[#191919]
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2  px-10 hover:px-6`;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const id = getDataFromToken();
    if (id.length > 0) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="border-b border-b-neutral-300 dark:border-b-neutral-700 fixed top-0 left-0 right-0 bg-white dark:bg-black backdrop-blur-lg bg-opacity-60 z-50">
      <div className="mx-8 lg:mx-6 xl:mx-16 flex justify-between items-center py-6">
        <a href="/" className="text-4xl font-bold">
          mystory
        </a>

        <div className="justify-center gap-6 hidden lg:flex items-center space-x-4">
          <a href="/" className={navClass}>
            Home
          </a>
          <a href="/about" className={navClass}>
            About
          </a>
          <a href="/faqs" className={navClass}>
            FAQs
          </a>

          {isLoggedIn ? (
            <div>
              <a href="/search" className={navClass}>
                Search
              </a>
              <a href="/profile" className={navClass}>
                Profile
              </a>
              <a href="/signout" className={navClass}>
                Sign Out
              </a>
              <a
                href="/confess"
                className="text-white py-1 inline-flex items-center justify-center rounded-full bg-purple-500 transform transition-all duration-300 font-semibold my-2  px-10 hover:px-6"
              >
                <p>Confess</p>

                <span className="ml-2">
                  <span className="relative flex h-3 w-3 ml-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-300"></span>
                  </span>
                </span>
              </a>
            </div>
          ) : (
            <>
              <a href="/signup" className={navClass}>
                Sign Up
              </a>
            </>
          )}
        </div>
        {!isNavOpen ? (
          <AiOutlineMenu
            onClick={toggleNav}
            className="flex lg:hidden w-6 h-6 cursor-pointer"
          />
        ) : (
          <RxCross1
            onClick={toggleNav}
            className="flex lg:hidden w-6 h-6 cursor-pointer"
          />
        )}
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <div className="flex flex-col lg:hidden justify-center items-center m-4">
            <a href="/" className={smNavClass}>
              Home
            </a>
            <a href="/about" className={smNavClass}>
              About
            </a>
            <a href="/faqs" className={smNavClass}>
              FAQs
            </a>
            {isLoggedIn ? (
              <div>
                <a href="/search" className={navClass}>
                  Search
                </a>
                <a href="/profile" className={navClass}>
                  Profile
                </a>
                <a href="/signout" className={navClass}>
                  Sign Out
                </a>
                <a
                  href="/confess"
                  className="text-white py-1 inline-flex items-center justify-center rounded-full bg-purple-500 transform transition-all duration-300 font-semibold my-2  px-10 hover:px-6"
                >
                  <p>Confess</p>

                  <span className="ml-2">
                    <span className="relative flex h-3 w-3 ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-300"></span>
                    </span>
                  </span>
                </a>
              </div>
            ) : (
              <div className="">
                <a href="/signup" className={navClass}>
                  Sign Up
                </a>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
