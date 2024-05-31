'use client';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { data: session } = useSession();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the value of isNavOpen
  };

  const smNavClass = `py-1 px-2 w-full rounded-full border
  border-[#616161] hover:border-[#191919] text-center
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2 hover:w-[90%] `;

  const navClass = `py-1  rounded-full border 
  border-[#616161] hover:border-[#191919]
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2  px-6 hover:px-5`;

  return (
    <div className="border-b border-b-neutral-300 dark:border-b-neutral-700 fixed top-0 left-0 right-0 bg-white dark:bg-black backdrop-blur-lg bg-opacity-60 z-50">

      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />

      <Toaster />
      <div className="mx-8 lg:mx-6 xl:mx-16 flex justify-between items-center py-5">
        <Link href="/" className="text-4xl font-bold">
          <div className=' relative h-24 w-24 mr-6'>
            <Image src="/mystory-new-logo/mystory-logo.svg" fill />
          </div>
        </Link>

        <div className="justify-center gap-6 hidden lg:flex items-center">
          <Link href="/" className={navClass}>
            <i className="ri-home-fill mr-2"></i>
            <span>Home</span>
          </Link>
          <Link href="/about/" className={navClass}>
            <i className="ri-medal-fill mr-2"></i>
            <span>About</span>
          </Link>
          <Link href="/faqs" className={navClass}>
            <i class="ri-chat-smile-fill mr-2"></i>
            <span>FAQs</span>
          </Link>
          <Link href="/search" className={navClass}>
            <i class="ri-search-line mr-2"></i>
            <span>Search</span>
          </Link>
          <Link href="/settings" className={navClass}>
            <i class="ri-settings-3-fill mr-2"></i>
            <span>Settings</span>
          </Link>

          {session ? (
            <>
              {session.user.role === 'admin' ? (
                <Link className={navClass} href="/admin">
                  Admin
                </Link>
              ) : (
                <></>
              )}
              <Link href="/profile" className={navClass}>
                Profile
              </Link>
              <Link className={navClass} href="/api/auth/signout?callback=/">
                Logout
              </Link>
            </>
          ) : (
            // <Link href="/signin" className={smNavClass}>
            //   Login/Signup
            // </Link>
            <Link href="/signin" className={navClass}>
              Login/Signup
            </Link>
          )}

          <Link
            href="/confess"
            className="text-white py-1 inline-flex items-center justify-center rounded-full bg-purple-500 transform transition-all duration-300 font-semibold my-2  px-10 hover:px-6"
          >
            <p>Confess</p>
          </Link>
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
            <Link href="/" className={smNavClass}>
              Home
            </Link>
            <Link href="/about" className={smNavClass}>
              About
            </Link>
            <Link href="/faqs" className={smNavClass}>
              FAQs
            </Link>
            <Link href="/search" className={smNavClass}>
              Search
            </Link>
            <Link href="/settings" className={smNavClass}>
              Settings
            </Link>
            {session ? (
              <>
                {session.user.role === 'admin' ? (
                  <Link className={navClass} href="/admin">
                    Admin
                  </Link>
                ) : (
                  <></>
                )}
                <Link href="/profile" className={navClass}>
                  Profile
                </Link>
                <Link className={navClass} href="/api/auth/signout?callback=/">
                  Logout
                </Link>
              </>
            ) : (
              <Link href="/signin" className={smNavClass}>
                Login/Signup
              </Link>
            )}

            <Link
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
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;