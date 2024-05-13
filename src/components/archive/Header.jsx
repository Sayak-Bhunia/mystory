'use client';
import React, { useEffect, useRef } from 'react';
import { trapBold } from './fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Header() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    gsap.to('.crsr', {
      ease: 'expo.out',
      scale: 1,
    });
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-follower crsr w-[50px] h-[50px] border-2 border-zinc-200 rounded-full opacity-50 fixed pointer-events-none"
      />
      <div className="flex justify-center items-center py-5 px-5 space-x-56 md:max-xl:space-x-20 mt-56">
        <div
          className={`${trapBold.className} flex items-center justify-center gap-1 md:max-xl:ml-10 cursor-pointer`}
        >
          <h1 className="text-slate-100 text-7xl font-bold">mystory</h1>
        </div>
      </div>
      <div className="flex justify-center items-center py-5 px-5 space-x-56 md:max-xl:space-x-20 lg:mb-80">
        <h3 className="bg-gray-100 rounded-3xl font-bold inline p-2 px-4 text-gray-800 text-sm md:lg:text-base">
          A way to share stories anonymously.
        </h3>
      </div>
    </>
  );
}
