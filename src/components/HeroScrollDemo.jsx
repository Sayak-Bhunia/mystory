'use client';
import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';

export default function HeroScrollDemo() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll
        titleComponent={
          <>
            <div className='my-16'>
              <h1 className='text-6xl font-bold text-black dark:text-white animate-pulse'>
                Unleash the power of Anonymity
              </h1>
              <h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-2'>
                mystory
              </h1>
              <div className='mt-4'>
                <span
                  className={`font-mono bg-[#313131] text-[#d9d9d9] font-semibold py-2 px-3 rounded-lg`}
                >
                  A way to share stories anonymously.
                </span>
              </div>
            </div>
          </>
        }
      >
        <Image
          src={`/mystory.png`}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto rounded-2xl object-cover h-full object-left-top'
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
