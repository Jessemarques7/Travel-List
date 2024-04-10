import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  Items,
  onDeleteItem,
  onToggleItem,
  onSetItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = Items;

  if (sortBy === "description")
    sortedItems = Items.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === "packed")
    sortedItems = Items.slice().sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  console.log(sortedItems);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onSetItems}>clear list</button>
      </div>
    </div>
  );
}
