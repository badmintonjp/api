import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Header() {
  const { data: session } = useSession();

  return (
    <header>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/server">Server</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            <Link href="/api-example">API</Link>
          </li>
        </ul>
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
                <div>
                  <Image
                    src={`${session.user.image}`}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />
                </div>
                <p className="flex flex-col">
                  <small>Signed in as</small>
                  <strong>{session.user.email || session.user.name}</strong>
                </p>
                <a
                  className="rounded border px-2 hover:bg-orange-600 hover:text-white hover:shadow-md"
                  href={`/api/auth/signout`}
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
