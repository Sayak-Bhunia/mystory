'use client';
import React from 'react';
import { HoverEffect } from '../components/ui/hover-effect.jsx';

const CardHoverEffectDemo = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-2xl lg:text-4xl font-bold text-purple-800 ">
        Top Confessions
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
};

const projects = [
  {
    title: 'Anonymous Love',
    description:
      'I have been secretly in love with my best friend for years.Every time they talk about their crushes, my heart breaks a little more.',
    link: '/confession/anonymous-love',
  },
  {
    title: 'The Secret Regret',
    description:
      'In college, I made a mistake that still haunts me. I cheated on an exam to get a better grade. I regret it every day.',
    link: 'confession/secret-regret',
  },
  {
    title: 'Family Expectations',
    description:
      'I pursued a career in medicine because my parents always wanted me to. But my true passion lies in music',
    link: '/confession/family-expectations',
  },
  {
    title: 'Unspoken Apologies',
    description:
      'I had a falling out with my childhood friend over something trivial. We have not spoken in years, and I wish I could turn back time and make things right.',
    link: '/confession/unspoken-apologies',
  },
  {
    title: 'The Forgotten Passion',
    description:
      'As a child I loved Painting.But life got in the way, and now I cannot remember the last time I picked up a brush.',

    link: '/confession/forgotten-passion',
  },
  {
    title: 'Lost Opportunities',
    description:
      'There was the job opportunity abroad that I turned down because I was too scared to leave my comfort zone. I often think about how different my life would be if I had taken that leap.',
    link: '/confession/lost-opportunities',
  },
];

export { CardHoverEffectDemo, projects };
