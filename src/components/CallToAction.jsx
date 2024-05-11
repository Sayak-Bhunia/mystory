"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser } from "react-icons/fa";

export default function CallToAction() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      data-aos="flip-up"
      data-aos-duration="1000"
      className="container mx-auto my-24 px-6 sm:px-8 lg:px-10"
    >
      <div className="flex flex-col-reverse md:flex-row justify-center items-center space-x-8 py-8 px-10 lg:py-4 border rounded-lg border-purple-800 bg-purple-950/20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-justify md:text-center md:text-5xl font-bold text-white">
            Start Sharing Your Confessions
          </h1>
          <p className="max-w-lg text-justify lg:text-center mt-4 text-lg font-light text-white">
            Share your confessions and experiences anonymously. Release the
            weight you&apos;ve been carrying and connect with others who share
            similar stories.
          </p>
          <a
            href="/signup"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 hover:text-white"
          >
            Get Started
            <span className="ml-4">
              <div className="inline-flex items-center justify-center">
                <FaUser className="w-5 h-5 mr-3" />
                <span className="relative flex h-3 w-3 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-300"></span>
                </span>
              </div>
            </span>
          </a>
        </div>
        <img
          src={"/getStarted.svg"}
          alt={"getStarted"}
          className="h-auto md:w-96 object-cover"
        />
      </div>
    </div>
  );
}

{
  /* <div className='flex flex-col items-center justify-center'>
          <h1 className='text-5xl'>Contributor</h1>
          <p className='w-[60%] text-center mt-4 font-extralight'>
            Get Started with sharing your confessions which you were keeping
            since so long
          </p>
          <div
            data-aos='fade-in'
            className='flex flex-col items-center justify-between sm:justify-center rounded-lg sm:mx-4'
          >
            <img
              src={'/developer.svg'}
              alt={'developer '}
              className='h-auto w-96 object-cover'
            />
            <a
              href='https://github.com/Sayak-Bhunia/mystory/'
              target='_blank'
              className='bg-neutral-700 hover:bg-neutral-800  text-white font-bold py-2 px-6 rounded-md text-lg '
            >
              <div className='flex items-center justify-between space-x-2'>
                <h1>Visit Repository</h1>
                <FaGithub />
              </div>
            </a>
          </div>
        </div> */
}
