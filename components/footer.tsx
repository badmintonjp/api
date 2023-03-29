import packageInfo from "@/package.json";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/5 pb-4">
      <hr />
      <p className="tracking-[0.5rem] py-4 font-extrabold text-center">
        MISATO BADMINTON
      </p>
      <hr />
      <div className="container mx-auto flex justify-between items-center gap-[5%] my-4 pl-2">
        <Link className="min-w-[120px] underline italic text-sm" href="/policy">
          Chính sách quyền riêng tư
        </Link>
        <Link
          className="min-w-[120px] underline italic text-sm"
          href="/contact"
        >
          Hòm thư góp ý
        </Link>
      </div>
      <p className="text-xs text-center underline decoration-slate-100 underline-offset-4">
        <em>
          Copyright © {new Date().getFullYear()} by
          <a
            className="text-rose-500 underline-offset-1 hover:text-rose-600  hover:underline"
            href="https://github.com/lediepts"
          >
            {" "}
            lediepts
          </a>{" "}
          !. All Rights Reserved.
        </em>
      </p>
    </footer>
  );
}
