'use client';
import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import styles from './page.css';

import data from '@/utils/accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
export default function Page() {
  const [className, setClassName] = useState(null);
  let [index, setIndex] = useState(null);
  return (
    <section className=" mt-28 mb-4 lg:w-[720px] md:w-[520px] w-[380px] m-auto  px-2  flex flex-col justify-between">
      <div className=" p-6 w-full flex gap-y-8 justify-center items-center  rounded-md flex-wrap  border-gray-300 border-[1px]">
        <div className="flex flex-col justify-center items-start gap-2">
          <span className=" text-[#A855F7]">Our Value</span>
          <span className=" text-white">
            MyStory - Next.js Blog/Story telling Template
          </span>
          <span className=" text-gray-500 text-sm">
            MyStory aims to provide a platform where individuals can share their
            stories without the pressure of revealing their identities.
            It&apos;s a safe space for expression and connection.
          </span>
          <Accordion
            className=" border-none mt-8"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={` border-2 border-gray-400 rounded-lg overflow-hidden mb-5 ${className} ${index == i ? 'open' : 'close'}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex justify-center flex-wrap items-center gap-y-3 ">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName('expanded')
                            : setClassName('collapsed')
                        }
                      </AccordionItemState>
                      <div className=" flex items-center justify-between w-full pt-2 pb-2 pl-8 pr-8">
                        <div className="flex justify-center items-center flex-wrap  p-2 bg-gray-800 rounded-lg">
                          {item.icon}
                        </div>
                        <span className=" text-white text-xs md:text-base">
                          {item.heading}
                        </span>
                        <div className="flex justify-center items-center flex-wrap  p-2 bg-gray-800 rounded-lg">
                          <MdOutlineArrowDropDown
                            className=" text-white"
                            size={20}
                            onClick={() => {
                              setIndex(i);
                            }}
                          />
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className=" text-gray-500 text-xs md:text-base">
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
