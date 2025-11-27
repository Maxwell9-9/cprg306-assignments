'use client';

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../../../_utils/auth-context";
import {getItems, addItem} from '../../_services/shopping-list-services';
import { useEffect } from 'react';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const loadItems =  async () => {
    if (!user) {
      setItems([]);
      return;
    }
    try {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    } catch (e) {
      console.error("Error loading items: ", e);
      setItems([]);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }
    try {
      const id = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { id, ...newItem }]);
    } catch (e) {
      console.error("Error adding items: ", e);
      setItems([]);
    }
  };

  const handleItemSelect = (item) => {
    
    let cleanedName = item.name
      .split(",")[0] 
      .replace(/[^\p{L}\p{N}\s]/gu, "") 
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <div>
      {user?
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
        :
        <p>you are not logged in</p>
      }
    </div>


  );
}
