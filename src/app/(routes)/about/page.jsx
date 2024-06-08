import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

import React from 'react';
import { ThreeDCardDemo } from '../../../components/about/page';

export default async function Page() {
  // const session = await getServerSession(options);
  // console.log(session);
  // if (!session) {
  //   return <div>No Session</div>;
  // }
  return (
    <div className="flex flex-col items-center justify-center pt-[5rem] h-screen bg-white ">
      <div className="bg-gradient-to-r from-[#6C07CC] to-[#D3A5FF] p-6 px-10 rounded-3xl shadow-lg max-w-4xl text-white shadow-[10px_10px_50px_10px_rgba(202,147,255,0.5)] ">
        <h1 className="text-4xl font-bold mb-6 ">About</h1>

        <div className="flex justify-between items-center gap-[2rem] w-full">
          <div className="max-w-lg">
            <p className="text-lg mb-4 flex-wrap ">
              MyStory aims to provide a platform where individuals can share their stories without the pressure of revealing their identities. It's a safe space for expression and connection.
            </p>
          </div>
          <div className="rounded-3xl bg-[#E4CAFC] p-4 flex w-2/5 shadow-md ">
            <div className="text-[#6C07CC] ">
              Sayak Bhunia,
              Narula institute of Technology
            </div>

            <img
              className="rounded-full float-right bg-white w-16 h-16 shadow-lg "
              src="https://avatars.githubusercontent.com/u/110457746?v=4"
              alt="Profile"
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg leading-relaxed">
            <span className='text-[1.5rem]'>𝗺𝘆𝘀𝘁𝗼𝗿𝘆 </span>is an open-source platform designed for individuals to share their stories anonymously, creating a safe space for expression without identity pressure. Built with Next.js, it serves as a blog template, with plans to become a full-stack project by adding authentication and databases. Contributions are welcome, with existing issues listed for development and suggestions for improvements encouraged. Contributors must follow the specified guidelines strictly.
          </p>
        </div>

        <div className="flex justify-end mt-6 space-x-2">
          <div className="w-6 h-6 bg-purple-300 rounded-full dark:bg-purple-600"></div>
          <div className="w-6 h-6 bg-purple-300 rounded-full dark:bg-purple-600"></div>
          <div className="w-6 h-6 bg-purple-300 rounded-full dark:bg-purple-600"></div>
          <div className="w-6 h-6 bg-purple-300 rounded-full dark:bg-purple-600"></div>
        </div>
      </div>
    </div>
  );
}