'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 2500);
  };

  return (
    <div className='relative h-60 w-96 md:h-60 md:w-96'>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className='absolute dark:bg-black bg-white h-60 w-[23rem] md:h-60 md:w-full rounded-3xl p-4 shadow-xl border border-neutral-100 dark:border-white/[0.3]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between'
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className='font-normal text-neutral-700 dark:text-neutral-200'>
              {card.content}
            </div>
            <div>
              <p className='text-neutral-500 font-medium dark:text-white'>
                {card.name}
              </p>
              <p className='text-neutral-400 font-normal dark:text-neutral-200'>
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
