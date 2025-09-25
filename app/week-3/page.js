import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl">Week 3</h1>
      <h1 className="text-2xl">Shopping List</h1>
      <ul>
        <ItemList />
      </ul>
    </div>
  );
}
