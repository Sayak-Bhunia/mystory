import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import React from 'react';

export default async function Page() {
  // const session = await getServerSession(options);
  // console.log(session);
  // if (!session) {
  //   return <div>No Session</div>;
  // }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>About</h1>
    </div>
  );
}
