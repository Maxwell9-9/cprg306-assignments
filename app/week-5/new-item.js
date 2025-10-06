"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item added: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-96 p-5 rounded shadow-md space-y-4"
    >
      
      <input
        type="text"
        placeholder="Item Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 text-gray-700"
      />

      
      <div className="flex items-center space-x-2">
        
        <span className="w-10 py-2 border border-gray-300 rounded text-center font-semibold text-sm text-gray-700">
          {quantity}
        </span>

        
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-3 py-2 rounded text-sm font-bold ${
            quantity > 1
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          –
        </button>

        
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className="px-3 py-2 rounded text-sm font-bold bg-blue-600 text-white hover:bg-blue-700"
        >
          +
        </button>

        
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 px-2 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 text-gray-700"
        >
          <option value="produce" className="text-gray-700">Produce</option>
          <option value="dairy" className="text-gray-700">Dairy</option>
          <option value="bakery" className="text-gray-700">Bakery</option>
          <option value="meat" className="text-gray-700">Meat</option>
          <option value="frozen foods" className="text-gray-700">Frozen Foods</option>
          <option value="canned goods" className="text-gray-700">Canned Goods</option>
          <option value="dry goods" className="text-gray-700">Dry Goods</option>
          <option value="beverages" className="text-gray-700">Beverages</option>
          <option value="snacks" className="text-gray-700">Snacks</option>
          <option value="household" className="text-gray-700">Household</option>
          <option value="other" className="text-gray-700">Other</option>
        </select>
      </div>

      
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
}
