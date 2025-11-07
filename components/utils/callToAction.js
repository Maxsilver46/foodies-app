import Link from "next/link";

export default function CallToAction({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-block mt-4 py-2 px-4 rounded-lg text-white font-bold 
        bg-gradient-to-r from-[#f9572a] to-[#ff9b05] hover:from-[#ff3f0a] hover:to-[#ffb948] no-underline ${className}`}
    >
      {children}
    </Link>
  );
}
