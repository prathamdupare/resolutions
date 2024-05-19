"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { status, data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-end text-sm lg:flex">
        {session ? (
          <button className="px-4 py-2 border rounded-md w-fit" onClick={() => signOut()}>
            Logout
          </button>
        ) : (
          <button className="px-4 py-2 border rounded-md w-fit" onClick={() => signIn("google")}>
            Login
          </button>
        )}
      </div>

      <div className="flex flex-col gap-8 justify-center items-center flex-1">
        {status === "authenticated" && (
          <pre className="max-w-2xl overflow-x-auto p-6 border rounded-md text-sm whitespace-pre-wrap break-words">
            {JSON.stringify(session, null, 2)}
          </pre>
        )}
      </div>
    </main>
  );
}
