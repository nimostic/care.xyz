import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout ({session.user.name})
      </button>
    );
  }

  return (
    <div className="flex gap-4">
      <button onClick={() => signIn("google")} className="bg-teal-600 text-white px-4 py-2 rounded">
        Login with Google
      </button>
      <button onClick={() => signIn()} className="border border-slate-300 px-4 py-2 rounded">
        Login with Email
      </button>
    </div>
  );
}