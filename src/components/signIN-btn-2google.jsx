import { signIn } from "../../auth.js";
import { FaGoogle } from "react-icons/fa";

export function SignIn2() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <button
        className="mt-8 transition-all duration-200 inline-flex gap-1 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 hover:text-white"
        type="submit"
      >
        Google
        <FaGoogle className="text-xl" />
      </button>
    </form>
  );
}
