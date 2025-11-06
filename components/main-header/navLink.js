"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const getActiveClass = (path, targetPath) =>
  path.startsWith(targetPath) ? "nav-active" : "";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-lg nav-hover ${getActiveClass(
        path,
        href
      )}`}
    >
      {children}
    </Link>
  );
}
