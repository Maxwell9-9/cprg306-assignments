"use client"

import { useState } from "react";
import Item from "./item";
import data from "./item.json";
export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const compareByName = function(a, b) {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
    }
    const compareByCategory = function(a, b) {
            if (a.category > b.category) {
                return 1;
            } else if (a.category < b.category) {
                return -1;
            } else {
                return 0;
            }
    } 

    const groupByCategory = function() {
        data.sort(compareByCategory);
    }

    const sortItems = function() {
        console.log(sortBy);
        switch (sortBy) {
            case "name": data.sort(compareByName); break;
            case "category": data.sort(compareByCategory); break;
        }
    }

    

    return (
        <div className="justify-center gap-2 mb-2">
            <button className="p-2 mr-2 rounded font-bold bg-blue-500 hover:bg-blue-50 text-gray-800" onClick={() => { setSortBy("name"); sortItems(); }}>Sort by name</button>
            <button className="p-2 mr-2 rounded font-bold bg-blue-500 hover:bg-blue-50 text-gray-800" onClick={() => { setSortBy("category"); sortItems(); }}>Sort by category</button>
            <button className="p-2 mr-2 rounded font-bold bg-blue-500 hover:bg-blue-50 text-gray-800" onClick={() => { groupByCategory(); }}>Group by Category</button>
            <ul>
                {data.map((item, index) => (
                    <li className="flex justify-between items-center p-4 hover:bg-gray-50" key={index}>
                    <div>
                        <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">Category: {item.category}</p>
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                        Qty: {item.quantity}
                    </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

