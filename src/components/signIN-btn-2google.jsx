import { signIn } from "../../auth.js";

export function SignIn2() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <button
        className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 hover:text-white"
        type="submit"
      >
        Google
      </button>
    </form>
  );
}
