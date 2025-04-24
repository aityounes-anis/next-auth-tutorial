"use server";

import { auth } from "@/auth";
import { SignInButton } from "./components/sign-in";
import { SignOutButton } from "./components/sign-out";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <section>
      <SignInButton>Login with Github</SignInButton>
      {session?.user && (
        <div>
          <h1>Next Auth v5</h1>
          <p>User Signed In with name: {session?.user?.name}</p>
          <p>User Signed In with email: {session?.user?.email}</p>
          {session?.user?.image && (
            <Image
              src={session.user.image}
              width={40}
              height={40}
              alt={session.user.name ?? "Avatar"}
            />
          )}
          <SignOutButton />
        </div>
      )}
    </section>
  );
}
