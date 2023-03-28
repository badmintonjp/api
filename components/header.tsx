import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-rose-600 text-white">
      <nav className="flex justify-between items-center container mx-auto gap-[5%]">
        <div className="flex justify-between items-center flex-1">
          <Link href="/" className="flex-1">
            <Image
              src={`/badminton.svg`}
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </Link>
          <div className="flex-1 flex gap-2 items-center justify-between h-14">
            <Link
              className="flex-1 flex items-center justify-center h-full hover:bg-white hover:text-rose-600"
              href="/server"
            >
              Server
            </Link>
            <Link
              className="flex-1 flex items-center justify-center h-full hover:bg-white hover:text-rose-600"
              href="/admin"
            >
              Admin
            </Link>
            <Link
              className="flex-1 flex items-center justify-center h-full hover:bg-white hover:text-rose-600"
              href="/api-example"
            >
              API
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-end gap-2">
            {!session && (
              <>
                <span>You are not signed in</span>
                <a
                  href={`/api/auth/signin`}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign in
                </a>
              </>
            )}
            {session?.user && (
              <>
                <div className="flex flex-col items-end gap-1">
                  <p className="text-xs">
                    {session.user.email || session.user.name}
                  </p>
                  <a
                    className="text-xs bg-white text-rose-600 px-2 py-0.5 rounded hover:bg-teal-600 hover:text-white"
                    href={`/api/auth/signout`}
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign out
                  </a>
                </div>
                <div>
                  <Image
                    src={`${session.user.image}`}
                    loading="lazy"
                    alt="Picture of the author"
                    width={40}
                    height={40}
                    className="rounded-full overflow-hidden shadow-lg bg-slate-200"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
