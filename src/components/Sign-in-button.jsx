import { signIn } from "../../auth";
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button type="submit">Github</button>
    </form>
  );
}
