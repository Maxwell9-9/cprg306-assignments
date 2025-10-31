'use client';

import { useState } from 'react';
import itemsData from './item.json';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';

export default function Page(){

    const [items, setItems] = useState(itemsData);

    const [selectedItemName, setSelectedItemName] = useState("");

    const handleItemSelect = (selectedItem) => {
      const itemName = selectedItem.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').split(",")[0].trim();

      setSelectedItemName(itemName);
      
    }

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };


  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Week 8 - Meal Ideas</h1>

      <div className="flex gap-4">
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
          
        </div>



        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>
    </main>

  );
}
