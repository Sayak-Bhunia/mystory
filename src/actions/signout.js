"use server";
import { signOut } from "../../auth.js";

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
  return null;
};
