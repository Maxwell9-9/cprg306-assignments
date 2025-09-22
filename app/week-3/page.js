import Item from "./item";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl">Week 3</h1>
      <ul>
        <Item name="Item 1" quantity={2} category="Category A" />
        <Item name="Item 2" quantity={5} category="Category B" />
        <Item name="Item 3" quantity={1} category="Category C" />
      </ul>
    </div>
  );
}
