'use client';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export function AboutCard({ author }) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover"
        style={{
          backgroundImage: `url(${author.image})`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10"></div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-white relative z-10">
            {author.name}
          </h1>
          <p className="font-normal text-sm text-slate-100 relative z-10 my-4">
            {author.details}
          </p>
        </div>
      </div>
    </div>
  );
}
