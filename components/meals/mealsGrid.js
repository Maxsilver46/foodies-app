import MealItem from "./mealItem";

export default function MealsGrid({ meals }) {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-20 my-8 mx-auto list-none p-0">
      {meals.map((meal) => (
        <li key={meal.id} className="meal-item">
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
