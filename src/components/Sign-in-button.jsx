import { signIn } from "next-auth/react";

export function SignIn() {
  const navClass = `py-1  rounded-full border 
  border-[#616161] hover:border-[#191919]
  hover:bg-[#F1F5F9] hover:text-black transform transition-all duration-300 font-semibold 
  my-2  px-10 hover:px-6
  hover:-translate-x-1`;
  return (
    <button className={navClass} onClick={() => signIn()}>
      Sign In
    </button>
  );
}
