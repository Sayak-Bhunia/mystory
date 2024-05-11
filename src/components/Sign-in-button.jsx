import { signIn } from "next-auth/react";

export function SignIn() {
  return <button onClick={() => signIn()}>Sign In</button>;
}
