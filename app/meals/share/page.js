import CallToAction from "@/components/utils/callToAction";

export default function MealsSharePage() {
  return (
    <main className="items-center text-white">
      <h1 className="text-white text-center text-6xl">Meals Share Page</h1>
      <p>Welcome to the meals share section of our application!</p>
      <CallToAction href="/meals">Back</CallToAction>
    </main>
  );
}
