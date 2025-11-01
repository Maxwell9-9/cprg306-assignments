"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;
    async function loadMealIdeas() {
      const mealResults = await fetchMealIdeas(ingredient);
      setMeals(mealResults);
    }
    loadMealIdeas();
  }, [ingredient]);

  if (!ingredient) {
    return (
      <div className="bg-white p-4 rounded shadow-md w-full">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Meal Ideas</h2>
        <p className="text-gray-500">Select an item to see meal ideas.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded shadow-md w-full">
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        Meal Ideas for "{ingredient}"
      </h2>
      <ul className="list-disc list-inside space-y-2">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer" >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
