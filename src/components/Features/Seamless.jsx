import { CardStack } from '@/components/ui/card-stack';
import { TiFlowSwitch } from 'react-icons/ti';

export default function Seamless() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between w-full 
    space-x-6 space-y-16 lg:space-y-0 px-8 sm:px-20 md:px-28 py-12 md:text-left text-center'>
      <div className='flex flex-col items-center sm:items-start md:justify-center justify-between  md:w-[60%]'>
        <div className='text-3xl lg:text-5xl font-semibold inline-flex space-x-3 items-center justify-center'>
          <h1>Seamless Experience</h1>
          <TiFlowSwitch />
        </div>
        <p className='text-md md:text-lg lg:text-xl mt-12 text-justify'>
          Intuitive and user-friendly experience, ensuring that every
          interaction with our platform is smooth and effortless.
        </p>
      </div>

      <CardStack items={CARDS} />
    </div>
  );
}

import { cn } from '@/utils/cn';
// Small utility to highlight the content of specific section of a testimonial contentx
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: 'Anon #1',

    content: (
      <p>
        I like tasting ice-creams with, <Highlight>Lemon</Highlight> Please
        don`t judge me 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: 'DelhiBoy',

    content: (
      <p>
        I dont like this Twitter thing, instead I use{''}
        <Highlight>Reddit</Highlight> because yolo!
      </p>
    ),
  },
  {
    id: 2,
    name: 'Tyler Durden',
    content: (
      <p>
        The first rule of
        <Highlight>CS Degree</Highlight> is that you do not talk about
        placements. Btw I like my <Highlight>coffee black ☕</Highlight>
      </p>
    ),
  },
];
