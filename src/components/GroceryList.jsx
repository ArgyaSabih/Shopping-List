import {useState} from "react";
import Item from "./Item";

export default function GroceryList({items, onDeleteItem, onToggleItem, onClearList}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "name") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "checked") {
    sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="name">Sort by item name</option>
          <option value="checked">Sort by checklist</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </>
  );
}
