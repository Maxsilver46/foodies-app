import CallToAction from "@/components/utils/callToAction";

export default function MealDetailPage({ params }) {
  const { slug } = params;

  return (
    <main className="items-center text-white">
      <h1 className="text-white text-center text-6xl">Meal Detail Page</h1>
      <p>Details for meal: {slug}</p>

      <CallToAction href="/meals">Back</CallToAction>
    </main>
  );
}
