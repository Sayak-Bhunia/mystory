import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';

export default function HeroScrollDemo() {
  return (
    <div className='flex flex-col'>
      <ContainerScroll
        titleComponent={
          <>
            <div className='mb-14 md:mb-24 mt-16 sm:mt-24 md:mt-24'>
              <h1 className='text-2xl sm:text-4xl lg:text-6xl font-bold text-black dark:text-white animate-pulse mb-6 mx-2'>
                Unleash the power of Anonymity
              </h1>
              <h1 className='font-extrabold text-transparent text-7xl sm:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600 pb-6'>
                mystory
              </h1>
              <div className='mt-4'>
                <span
                  className={`font-mono dark:bg-[#313131] bg-[#d1d1d1] dark:text-[#d9d9d9] font-semibold py-2 px-3 rounded-lg`}
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
          className='rounded-2xl object-cover h-full object-center'
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
