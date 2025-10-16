"use client"

import { useState } from "react";
import Item from "./item";
import data from "./item.json";
export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");




    data.sort((a,b) => {
        switch (sortBy) {
            case "name": return a.name.localeCompare(b.name);
            case "category": return a.category.localeCompare(b.category);
        }
    })


    

    return (
        <div className="justify-center gap-2 mb-2">


            <button className={`p-2 mr-2 rounded font-bold text-gray-800 ${sortBy == "name" ? "bg-blue-500" : "bg-gray-500"}`} onClick={() => { setSortBy("name");}}>Sort by name</button>
            <button className={`p-2 mr-2 rounded font-bold  text-gray-800 ${sortBy == "category" ? "bg-blue-500" : "bg-gray-500"}`} onClick={() => { setSortBy("category");}}>Sort by category</button>
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

