"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { SignOut } from "./Sign-out-button";

import { SignIn } from "./Sign-in-button";
const NavBar = () => {
  const { data: session } = useSession();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navClass = `py-1  rounded-full border 
  border-[#616161] hover:border-[#191919]
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2  px-10 hover:px-6`;

  const smNavClass = `py-1 w-full rounded-full border 
  border-[#616161] hover:border-[#191919] text-center
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2 hover:w-[90%]`;

  return (
    <div className="border-b border-b-neutral-700 fixed top-0 left-0 right-0 bg-black backdrop-blur-lg bg-opacity-40 z-50">
      <div className="mx-8 lg:mx-20 flex justify-between items-center py-4 md:py-8">
        <a href="/" className="text-4xl font-bold">
          mystory
        </a>

        <div className="justify-center gap-6 hidden lg:flex items-center space-x-4">
          <Link href="/" className={navClass}>
            Home
          </Link>
          <Link href="/about" className={navClass}>
            About
          </Link>
          <Link href="/faqs" className={navClass}>
            FAQs
          </Link>
          <Link href="/epics" className={navClass}>
            Share
          </Link>
          <a
            href="/schools-of-thought"
            className="py-1 inline-flex items-center justify-center rounded-full bg-purple-500 transform transition-all duration-300 font-semibold my-2  px-10 hover:px-6"
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
            <Link href="/share" className={smNavClass}>
              Share
            </Link>
            <Link href="/confess" className={smNavClass}>
              Confess
            </Link>
            {session ? <SignOut /> : <SignIn />}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
