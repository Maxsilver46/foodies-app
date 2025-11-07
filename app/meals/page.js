import CallToAction from "@/components/utils/callToAction";
import { getAllMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/mealsGrid";

export default function MealsPage() {
  const meals = getAllMeals();

  return (
    <>
      <header className="gap-12 mt-16 ml-20 mb-20 w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl">
        <h1 className="font-montserrat font-bold mb-12 text-6xl">
          Delicious meals, created{" "}
          <span className="highlight-gradient">by you</span>
        </h1>
        <p className="text-3xl mb-2">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <div className="cta">
          <CallToAction href="/meals/share">
            <span className="text-3xl">Share Your Favorite Recipe</span>
          </CallToAction>
        </div>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
