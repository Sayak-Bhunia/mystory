import { signOut } from "next-auth/react";

export function SignOut() {
  return <button onClick={() => signOut({ redirectTo: "/" })}>Signout</button>;
}
