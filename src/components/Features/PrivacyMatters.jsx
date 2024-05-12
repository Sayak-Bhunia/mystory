import { EvervaultCard, Icon } from '@/components/ui/evervault-card';
import { FaLock } from 'react-icons/fa6';

export default function PrivacyMatters() {
  return (
    <>
      <div
        data-aos='fade-up'
        data-aos-easing='linear'
        data-aos-duration='1500'
        className='flex flex-col lg:flex-row-reverse items-center justify-between w-full 
       space-y-16 lg:space-y-0 px-8 sm:px-20 md:px-8 py-12 md:text-left text-center'
      >
        <div className='flex flex-col items-center sm:items-start lg:justify-center justify-between lg:w-[50%] ml-4 '>
          <div className='text-3xl lg:text-5xl font-semibold inline-flex space-x-3 items-center justify-center'>
            <h1>Privacy Matters</h1>
            <FaLock />
          </div>
          <p className='text-md md:text-lg lg:text-xl mt-12 text-justify'>
            Safeguarding your privacy is our utmost priority. We employ robust
            industry-standard security protocols to protect your data
          </p>
        </div>

        <div className='border border-black/[0.2] dark:border-white/[0.2] bg-purple-100 dark:bg-black flex flex-col items-start p-4 relative'>
          <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
          <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
          <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
          <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

          <EvervaultCard text='Identity' />

          <h2 className='dark:text-white text-black mt-4 text-sm font-light'>
            Your entire Identity is protected and encrypted (Hover)
          </h2>
          <a
            href='/privacy-policy'
            className='text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5'
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
