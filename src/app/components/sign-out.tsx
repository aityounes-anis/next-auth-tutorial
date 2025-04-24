"use client";

import { logout } from "@/lib/actions/auth";

export const SignOutButton = () => {
  return (
    <button type="button" onClick={() => logout()}>
      Logout
    </button>
  );
};
