export default function Item({ item, onSelect, onDelete }) {
  
  const handleItemDelete = (e) => {
    e.stopPropagation();
    onDelete(item.id);
  }
  
  return (
    <li
      onClick={() => onSelect(item)}
      className="flex justify-between items-center p-4 hover:bg-blue-50 bg-gray-50 hover:border-2 rounded-xl cursor-pointer">
      <div>
        <p className="text-lg font-semibold text-gray-800">{item.name}</p>
        <p className="text-sm text-gray-500">Category: {item.category}</p>
        <button className="text-red-400"onClick={() => onDelete(item.id)}>delete</button>
      </div>
      <span className="text-sm font-medium text-blue-600">
        Qty: {item.quantity}
      </span>
    </li>
  );
}
