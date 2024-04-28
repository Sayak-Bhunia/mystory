import '../globals.css';
import { trapBold } from './fonts';
import { Open_Sans, Syne } from 'next/font/google';
import React, { useEffect, useState } from 'react';

const inter = Open_Sans({ subsets: ['latin'] })

const thankyouList = [
  "thank you",
  "gracias",
  "धन्यवाद",
  "merci",
  "danke",
  "ありがとう",
  "谢谢",
  "Спасибо",
  "شكراً",
  "감사합니다",
];

export default function Footer() {
  const [currthank, setCurrThank] = useState(thankyouList[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = thankyouList.indexOf(currthank);
      const nextIndex = (currentIndex + 1) % thankyouList.length;
      setCurrThank(thankyouList[nextIndex]);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [currthank]);

    return (
        <>
            <div className="bg-white h-64 flex justify-center items-center py-5 px-5 space-x-56 md:max-xl:space-x-20 mx-auto text-center">
                <div className={`${inter.className} flex items-center justify-center gap-1 md:max-xl:ml-10 cursor-pointer`}>
                    <p className={`text-slate-400 text-[2rem] font-bold md:w-[385px] md:text-[3rem]`}>
                        {currthank === "شكراً" && "!"} {currthank}{" "}
                        {currthank != "شكراً" && "!"}
                    </p> 
                </div>
            </div>
            <hr className="w-12 border-t-2 border-dashed border-slate-600 mx-auto" />
            <div className="bg-white flex justify-center items-center py-5 px-5 space-x-56 md:max-xl:space-x-20 mx-auto text-center">
                    <div className={`flex items-center justify-center gap-1 md:max-xl:ml-10 cursor-pointer`}>
                        <p claName={`${inter.className}`}>@{new Date().getFullYear()} mystory. all rights reserved.</p>
                    </div>
            </div>
        </>
    );
};