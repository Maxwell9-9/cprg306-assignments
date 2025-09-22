export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-4 hover:bg-gray-50">
      <div>
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
      <span className="text-sm font-medium text-blue-600">
        Qty: {quantity}
      </span>
    </li>
  );
}   
