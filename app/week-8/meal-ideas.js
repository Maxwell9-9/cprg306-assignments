"use client"

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (ingredient.length == 0) {
    return [];
  }
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const meals = await fetchMealIdeas(ingredient);
    console.log(meals);
    setMeals(meals);
  }
  
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl">Meal Ideas:</h2>
      {meals.length > 0 ? ( 
        <ul className="flex flex-col gap-1">
          {meals.map((meal, index) => (
            <li key={index} className="flex justify-between items-center p-4 hover:bg-gray-100 bg-gray-50 hover:border-2 rounded-xl">
              {meal.strMeal}
              <img src={meal.strMealThumb} alt="meal image" width={50} />
            </li>
          ))}
        </ul> )
      : (
        <p>Select an item to view meals</p>
      )
      
      }

    </div>
  )
  
}

