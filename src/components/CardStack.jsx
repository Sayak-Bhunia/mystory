"use client";
import { CardStack } from "@/components/ui/card-stack";

export default function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}


import { cn } from '@/utils/cn';
// Small utility to highlight the content of specific section of a testimonial content
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
        I like tasting ice-creams with, <Highlight>Lemon</Highlight> Please don`t judge me 🙏
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
        <Highlight>CS Degree</Highlight> is that you do not talk about placements.
        Btw I like my  <Highlight>coffee black ☕</Highlight>
      </p>
    ),
  },
];
