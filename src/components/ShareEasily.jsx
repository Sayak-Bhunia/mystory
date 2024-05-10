import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import { BsFillShareFill } from 'react-icons/bs';

export default function ShareEasily() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full space-y-16 md:space-y-0 px-8 md:px-36 py-24 md:text-left text-center'>
      <div className='flex flex-col items-start md:justify-center justify-between md:w-[50%]'>
        <div className='text-3xl lg:text-5xl font-semibold inline-flex space-x-3 items-center justify-center'>
          <h1>Share Easily</h1>
          <BsFillShareFill />
        </div>
        <p className='text-md md:text-lg lg:text-xl mt-4 text-justify'>
          Have fun! exploring other&apos;s secrets and sharing yours
          anonymously.
        </p>
      </div>
      <PinContainer
        title='AnonymousBoy_1'
        href='https://twitter.com/mannupaaji'
      >
        <div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] '>
          <h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
            Hashed_id
          </h3>
          <div className='text-base !m-0 !p-0 font-normal'>
            <span className='text-slate-500 '>My dog step on a bee~! 🐝</span>
          </div>
          <div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
        </div>
      </PinContainer>
    </div>
  );
}
