import Link from "next/link";
import packageInfo from "@/package.json";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="flex flex-col justify-center items-center">
        <p>
          <em>
            {packageInfo.name}@{packageInfo.version}
          </em>
        </p>
        <p className="text-sm">
          <em>
            Copyright © {new Date().getFullYear()}
            <a href="https://github.com/lediepts"> by lediepts</a>. All Rights
            Reserved.
          </em>
        </p>
      </div>
    </footer>
  );
}
