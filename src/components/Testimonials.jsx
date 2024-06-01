'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';

export const InfiniteMovingCardsDemo = () => {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const testimonials = [
  {
    quote:
      'I cannot BELIEVE how simple the mystory is to use ,and how amazing the customer support is.I also love the clean, beautiful design of the website.',
    name: 'Dina S.',
    title: 'VP of Marketing, RedShelf',
  },
  {
    quote:
      'We LOVE the product .I love the new interactive blog confession and new modes that come out.There is a cool variety of blogs and having multiple features is great.',
    name: 'Dustin Pelletier',
    title: 'Franchise owner, Big Air Trampoline Park',
  },
  {
    quote:
      'There is absolutely no doubt in my mind that without Mystory. I would not have been able to make the jump to a major blog story.',
    name: 'Edgar M.',
    title: 'CEO, The Story',
  },
  {
    quote:
      'Sayak-Bhunia has NAILED the "how to make a blog" process. I am so happy with the results! I would like to personally thank you for your outstanding product.',
    name: 'Aksshay',
    title: 'Open Source Developer',
  },
  {
    quote:
      'The competitive Playbook is an ideal blend of both strategic and tactical guidance to help you kickstart or revamp your blogs.Awesome.',
    name: 'Jarvis Karel',
    title: 'AVP , Zeindesk',
  },
];
