'use client';

import { useState } from 'react';
import itemsData from './item.json';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    
    let cleanedName = item.name
      .split(",")[0] 
      .replace(/[^\p{L}\p{N}\s]/gu, "") 
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Week 8 - Shopping List + Meal Ideas</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem}/>
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName}/>
        </div>
      </div>
    </main>
  );
}
