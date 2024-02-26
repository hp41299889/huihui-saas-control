"use client";
import { useSession, signIn, signOut } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  const nextauthSignin = () => {
    signIn("google");
  };
  const nextauthSignout = () => {
    signOut();
  };
  return (
    <>
      {session ? (
        <>
          Signed in as {session.user.email}
          <button onClick={nextauthSignout}>signout</button>
        </>
      ) : (
        <>
          Not signed in
          <button onClick={nextauthSignin}>google</button>
          <button onClick={nextauthSignout}>signout</button>
        </>
      )}
    </>
  );
};

export default Page;
