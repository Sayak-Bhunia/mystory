import { FaUser } from 'react-icons/fa';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <div
      data-aos='flip-down'
      data-aos-once='true'
      className='container mx-auto my-24 px-6 sm:px-8 lg:px-10'
    >
      <div className='flex flex-col-reverse md:flex-row justify-center items-center space-x-8 py-8 px-10 lg:py-4 border rounded-lg border-purple-800 bg-purple-200 dark:bg-purple-950/20'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl text-justify md:text-center md:text-5xl font-bold '>
            Start Sharing Your Confessions
          </h1>
          <p className='max-w-lg text-justify lg:text-center mt-4 text-lg font-light '>
            Share your confessions and experiences anonymously. Release the
            weight you&apos;ve been carrying and connect with others who share
            similar stories.
          </p>
          <a
            href='/signup'
            className='mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 hover:text-white'
          >
            Get Started
            <span className='ml-4'>
              <div className='inline-flex items-center justify-center'>
                <FaUser className='w-5 h-5 mr-3' />
                <span className='relative flex h-3 w-3 ml-1'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-3 w-3 bg-purple-300'></span>
                </span>
              </div>
            </span>
          </a>
        </div>
        <Image
          src='/getStarted.svg' // Adjust the path to your image file
          alt='getStarted'
          width={384} // Adjust the width according to your design (96 * 4)
          height={288} // Adjust the height according to your design (auto height)
          className='h-auto md:w-96 object-cover'
        />
      </div>
    </div>
  );
}
