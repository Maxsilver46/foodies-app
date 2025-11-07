import MealItem from "./mealItem";

export default function MealsGrid({ meals }) {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id} className="meal-item">
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
