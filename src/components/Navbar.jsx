"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { data: session } = useSession();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navClass = `py-1  rounded-full border 
  border-[#616161] hover:border-[#191919]
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2  px-10 hover:px-6
  hover:-translate-x-1`;

  const smNavClass = `py-1 w-full rounded-full border 
  border-[#616161] hover:border-[#191919] text-center
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2 hover:w-[90%]`;

  return (
    <div className="border-b border-b-neutral-500">
      <div className="mx-8 lg:mx-20 flex justify-between items-center py-8 md:py-10">
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
          <Link href="/schools-of-thought" className={navClass}>
            Confess
          </Link>
          {session ? (
            <Link href="/login" className={navClass}>
              {session.user.name}
            </Link>
          ) : (
            <Link href="/login" className={navClass}>
              Login
            </Link>
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
            <a href="/share" className={smNavClass}>
              Share
            </a>
            <a href="/confess" className={smNavClass}>
              Confess
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
