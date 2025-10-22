'use client';

import { useState } from 'react';
import itemsData from './item.json';
import ItemList from './item-list';
import NewItem from './new-item';

export default function Page(){

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };


  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Week 7 - Shopping List </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
