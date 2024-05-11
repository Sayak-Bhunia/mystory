import { signIn } from "../../auth";
import { FaGithub } from "react-icons/fa6";
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button
        className="border border-white px-2 flex items-center justify-center gap-1 py-1 md:px-4 md:py-2 rounded-lg hover:text-black hover:bg-white transition-all duration-300"
        type="submit"
      >
        Github
        <FaGithub className="text-lg" />
      </button>
    </form>
  );
}
