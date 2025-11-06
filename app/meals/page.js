import Link from "next/link";

export default function MealsPage() {
  return (
    <main className="items-center text-white">
      <h1 className="text-white text-center text-6xl">Meals Page</h1>
      <p className="block text-center m-4">
        Welcome to the meals section of our application!
      </p>
      <div className="flex flex-col mt-4 items-center gap-4">
        <Link
          href="/meals/share"
          className="inline-block mt-4 py-2 px-4 rounded-lg cta-primary-gradient text-white font-bold no-underline"
        >
          Share a Meal
        </Link>
        <Link
          href="/meals/detail"
          className="inline-block mt-4 py-2 px-4 rounded-lg cta-primary-gradient text-white font-bold no-underline"
        >
          View Meal Details
        </Link>
        <Link
          href=".."
          className="inline-block mt-4 py-2 px-4 rounded-lg cta-primary-gradient text-white font-bold no-underline"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
