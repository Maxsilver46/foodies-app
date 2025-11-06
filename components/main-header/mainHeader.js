"use client";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "@/components/main-header/mainHeaderBackground";
import { usePathname } from "next/navigation";

const getActiveClass = (path, targetPath) =>
  path.startsWith(targetPath) ? "nav-active" : "";

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center px-4 py-16 md:px-[10%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-8 no-underline text-[#ddd6cb] font-bold font-montserrat tracking-[0.15rem] uppercase text-2xl"
        >
          <Image
            src={logoImg}
            alt="A plate with food on it"
            className="w-20 h-20 object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
            priority
          />
          <span className="text-3xl">NextLevel Food</span>
        </Link>

        <nav>
          <ul className="list-none m-0 p-0 flex gap-6 text-2xl">
            <li>
              <Link
                href="/meals"
                className={`no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-lg nav-hover ${getActiveClass(
                  path,
                  "/meals"
                )}`}
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={`no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-lg nav-hover ${getActiveClass(
                  path,
                  "/community"
                )}`}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
