import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "@/components/main-header/mainHeaderBackground";
import NavLink from "./navLink";

export default function MainHeader() {
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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
