"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "category":
        return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="justify-center gap-2 mb-2 px-5">
      <div className="flex flex-row justify-center pb-2">
        <button
          className={`p-2 mr-2 rounded font-bold text-gray-800 ${
            sortBy === "name" ? "bg-blue-500" : "bg-gray-500"
          }`}
          onClick={() => setSortBy("name")}>
          Sort by name
        </button>
        <button
          className={`p-2 rounded font-bold text-gray-800 ${
            sortBy === "category" ? "bg-blue-500" : "bg-gray-500"
          }`}
          onClick={() => setSortBy("category")}>
          Sort by category
        </button>
      </div>

      <ul className="flex flex-col gap-1">
        {items.map((item, index) => (
          <Item key={index} item={item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
