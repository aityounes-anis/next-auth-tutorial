"use client";

import { login } from "@/lib/actions/auth";

type SignInButtonType = {
  children: React.ReactNode;
};

export const SignInButton = ({ children }: SignInButtonType) => {
  return (
    <button type="button" onClick={() => login()}>
      {children}
    </button>
  );
};
