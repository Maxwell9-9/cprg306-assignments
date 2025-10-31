"use client";

import { useState, useEffect } from "react";

let fetchMealsIdeas = async (ingredient) => {
    try {
        let response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        let data = await response.json();
        return data.meals;
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
};

export default function MealIdeas() {
    const [meals, setMeals] = useState([]);
    const [mealIdeas, setMealIdeas] = useState([]);

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

   const loadMealIdeas = async () => {
       const ideas = await fetchMealsIdeas(ingredient);
       setMealIdeas(ideas);
   };

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
