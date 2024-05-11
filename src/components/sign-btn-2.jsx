import { signIn } from "../../auth.js";
import { FaGithub } from "react-icons/fa";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button
        className="mt-8 inline-flex transition-all duration-200 items-center gap-1 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 hover:text-white"
        type="submit"
      >
        GitHub
        <FaGithub className="text-xl" />
      </button>
    </form>
  );
}
