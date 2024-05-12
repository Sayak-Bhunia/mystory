import { PinContainer } from '@/components/ui/3d-pin';
import { BsFillShareFill } from 'react-icons/bs';
import Image from 'next/image';

export default function ShareEasily() {
  return (
    <div
      data-aos='fade-up'
      data-aos-once='true'
      className='flex flex-col lg:flex-row items-center justify-between w-full 
    space-x-2 space-y-16 lg:space-y-0 px-8 sm:px-20 md:px-8 py-12 md:text-left text-center'
    >
      <div className='flex flex-col items-center sm:items-start lg:justify-center justify-between lg:w-[50%] '>
        <div className='text-3xl lg:text-5xl font-semibold inline-flex space-x-3 items-center justify-center'>
          <h1>Share Easily</h1>
          <BsFillShareFill />
        </div>
        <p className='text-md md:text-lg lg:text-xl mt-12 text-justify '>
          Have fun! exploring other&apos;s secrets and sharing yours
          anonymously. Share the confessions with your friends and family on
          various social media platforms.
        </p>
      </div>
      <div>
        <PinContainer
          title='AnonymousBoy_1'
          href='https://twitter.com/mannupaaji'
        >
          <div className='flex basis-full p-2 flex-col tracking-tight text-slate-100/50  w-[20rem] h-[20rem] '>
            <h3 className='pb-2 m-0 font-bold  text-base text-slate-100'>
              Hashed_id
            </h3>
            <div className='text-base !m-0 !p-0 font-normal'>
              <span className='text-slate-500 '>My dog step on a bee~! 🐝</span>
            </div>
            <Image
              src='/share.svg'
              alt='getStarted'
              width={500}
              height={200}
              className='flex flex-1 w-full h-[14rem] object-conver rounded-lg py-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500'
            />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
