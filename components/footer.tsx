import packageInfo from "@/package.json";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="flex flex-col justify-center items-center">
        <p className="tracking-[0.5rem] py-4 font-extrabold">
          MISATO BADMINTON
        </p>
        <p className="text-sm">
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
      </div>
    </footer>
  );
}
