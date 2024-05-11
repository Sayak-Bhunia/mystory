import { SignIn } from "@/components/sign-btn-2";
import { SignIn2 } from "@/components/signIN-btn-2google";
// import { useSession } from "next-auth/react";

export default function Page() {
  // const { data: session } = useSession();
  return (
    <div className=" h-[90vh] mx-auto flex flex-col items-center justify-center  ">
      <div className="w-[90vw] max-w-4xl  flex flex-col h-[80vh] gap-2 md:gap-4 items-center justify-center border border-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold">Login to mystory</h1>
          <p className="text-xs md:text-sm  font-light">
            Dive deep into stories
          </p>
        </div>
        <div className="flex flex-col md:flex-row  md:gap-2">
          <SignIn />
          <SignIn2 />
        </div>
      </div>
    </div>
  );
}
