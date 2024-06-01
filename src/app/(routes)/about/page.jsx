
import React from 'react';
import { ThreeDCardDemo } from '../../../components/about/page';

export default async function Page() {
  // const session = await getServerSession(options);
  // console.log(session);
  // if (!session) {
  //   return <div>No Session</div>;
  // }
  return (
    <div className="mt-28">
      <ThreeDCardDemo />
    </div>
  );
}
