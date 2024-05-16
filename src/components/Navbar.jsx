'use client';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { data: session } = useSession();
  // console.log(session);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const smNavClass = `py-1 px-2 w-full rounded-full border 
  border-[#616161] hover:border-[#191919] text-center
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2 hover:w-[90%] `;

  const navClassWrapper = `py-1  rounded-full border 
  border-[#616161] hover:border-[#191919]
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2  px-10 flex items-center justify-center w-[136px] group`;

  const navClass = `py-1  rounded-full 
   group-hover:border border-[#191919]
  group-hover:bg-[#F1F5F9] group-hover:text-black transform transition-all duration-300 font-semibold 
  px-10 group-hover:px-6`;

  return (
    <div className="border-b border-b-neutral-300 dark:border-b-neutral-700 fixed top-0 left-0 right-0 bg-white dark:bg-black backdrop-blur-lg bg-opacity-60 z-50">
      <Toaster />
      <div className="mx-8 lg:mx-6 xl:mx-16 flex justify-between items-center py-6">
        <a href="/" className="text-4xl font-bold">
          mystory
        </a>

        <div className="justify-center gap-6 hidden lg:flex items-center">
          <a className={navClassWrapper} href="/">
            <p className={navClass}>Home</p>
          </a>
          <a className={navClassWrapper} href="/about">
            <p className={navClass}>About</p>
          </a>
          <a className={navClassWrapper} href="/faqs">
            <p className={navClass}>FAQs</p>
          </a>
          <a className={navClassWrapper} href="/search">
            <p className={navClass}>Search</p>
          </a>
          {session ? (
            <Link
              href="/api/auth/signout?callback=/"
              className={navClassWrapper}
            >
              <p className={navClass}>Logout</p>
            </Link>
          ) : (
            <a className={`${navClassWrapper} w-[170px]`} href="/signin">
              <p className={`${navClass} group-hover:px-4`}>Login/Signup</p>
            </a>
          )}

          <a
            href="/confess"
            className="text-white  bg-purple-700 
py-1  rounded-full border 
  border-[#3a3838] hover:border-[#3a3838]
  hover:bg-purple-300 hover:text-black transform transition-all duration-300 font-semibold 
  my-2  px-10 flex items-center justify-center w-[156px] group"
          >
            <p
              className="py-1 text-white rounded-full 
   group-hover:border border-slate-800
  group-hover:bg-purple-300 group-hover:text-slate-800  transform transition-all duration-300 font-semibold 
  px-10 group-hover:px-6"
            >
              Confess
            </p>
          </a>
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
            <a href="/search" className={smNavClass}>
              Search
            </a>
            <a href="/signin" className={smNavClass}>
              Login/Signup
            </a>
            <a
              href="/confess"
              className="py-1 inline-flex w-full items-center justify-center rounded-full bg-purple-500 transform transition-all duration-300 font-semibold my-2  px-10 hover:px-6"
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
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
