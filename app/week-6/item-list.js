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

    const sortItems = function() {
        console.log(sortBy);
        switch (sortBy) {
            case "name": data.sort(compareByName); break;
            case "category": data.sort(compareByCategory); break;
        }
    }

    

    return (
        <div>
            <button onClick={() => { setSortBy("name"); sortItems(); }}>Sort by name</button>
            <button onClick={() => { setSortBy("category"); sortItems(); }}>Sort by category</button>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>Name: {item.name}, Category: {item.category}</li>
                ))}
            </ul>
        </div>

    )
}

