'use client';
import React from 'react';
import './page.css';
import data from '@/utils/accordion';
import CustomCursor from '@/components/ui/custom-cursor';
// ...
import BackToTop from '../../../components/BackToTop';

export default function Page() {
  return (
    <>
      <CustomCursor />
      <section className="mt-28 py-8 mb-20 lg:w-[720px] md:w-[520px] w-[380px] m-auto px-2 flex flex-col justify-between">
        <div className="p-6 w-full flex gap-y-8 justify-center items-center rounded-md flex-wrap mt-[46px] border-gray-300 border-[1px]">
          <div className="flex flex-col justify-center items-start gap-2">
            <span className="text-[#A855F7]">Our Value</span>
            <span className="text-white">
              MyStory - Next.js Blog/Story telling Template
            </span>
            <span className="text-gray-500 text-sm">
              MyStory aims to provide a platform where individuals can share their stories without the pressure of revealing their identities. It&apos;s a safe space for expression and connection.
            </span>
            <div className="mt-8 w-full">
              {data.map((item, i) => (
                <div key={i} className="faq-item border-2 border-gray-400 rounded-lg overflow-hidden mb-5 p-4 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center p-2 bg-purple-500 rounded-lg">
                      {item.icon}
                    </div>
                    <span className="text-gray-500 text-xs md:text-base">
                      {item.heading}
                    </span>
                  </div>
                  <div className="faq-detail text-gray-500 text-xs md:text-base top-full left-0 w-full bg-white p-4">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        <BackToTop />
      </div>
      </section>
    </>
  );
}
