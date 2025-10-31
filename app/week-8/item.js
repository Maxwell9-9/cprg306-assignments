"use client"

export default function Item({ item, onSelect }) {
  return (
    <li className="flex justify-between items-center p-4 hover:bg-gray-50" onClick={() => onSelect(item)}>
      <div>
        <p className="text-lg font-semibold text-blue-800">{item.name}</p>
        <p className="text-sm text-blue-500">Category: {item.category}</p>
      </div>
      <span className="text-sm font-medium text-blue-600">
        Qty: {item.quantity}
      </span>
    </li>
  );
}   
