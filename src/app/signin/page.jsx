import { SignIn } from "@/components/Sign-in-button";
export default function Page() {
  return (
    <div className=" h-[90vh] mx-auto flex flex-col items-center justify-center  ">
      <div className="w-[90vw] max-w-4xl  flex flex-col h-[80vh] gap-2 md:gap-4 items-center justify-center border border-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold">Login to mystory</h1>
          <p className="text-xs md:text-sm  font-light">
            Dive deep into stories
          </p>
        </div>
        <SignIn />
      </div>
    </div>
  );
}
