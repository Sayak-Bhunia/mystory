import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col">
      <ContainerScroll
        titleComponent={
          <>
            <div className="mb-14 md:mb-24 mt-16 sm:mt-24 md:mt-24">

              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-black dark:text-white animate-pulse mb-6 mx-2">
                Unleash the power of Anonymity
              </h1>
              <h1 className="font-extrabold text-transparent text-7xl sm:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600 pb-6">
                mystory
              </h1>
              <div className="mt-4">
                <span
                  className={`font-mono dark:bg-[#313131] bg-[#d1d1d1] dark:text-[#d9d9d9] font-semibold py-2 px-3 rounded-lg`}
                >
                  A way to share stories anonymously.
                </span>


              </div>
              <div className=' flex items-center justify-center mt-5'>
                <Link href={'https://github.com/Sayak-Bhunia/mystory'} target="_blank">
                  <button class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      ></path>
                    </svg>
                    Star us on Github
                  </button>
                </Link>
              </div>
            </div>
          </>
        }
      >
        <Image
          src={`/Productlandingpage/main.png`}
          alt="hero"
          height={720}
          width={1400}
          className="rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
