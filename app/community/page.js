import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="items-center text-white">
      <h1 className="text-white text-center text-6xl">Community Page</h1>
      <p>Welcome to the community section of our application!</p>
      <Link
        href=".."
        className="inline-block mt-4 py-2 px-4 rounded-lg cta-primary-gradient text-white font-bold no-underline"
      >
        Back
      </Link>
    </main>
  );
}
