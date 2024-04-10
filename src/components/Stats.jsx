export default function Stats({ onItems }) {
  if (!onItems.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = onItems.length;
  const packedItems = onItems.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `💼 You have ${numItems} items on your list, and you already packed
          ${packedItems} (${percentage}%)`
          : "You got everything! Ready to go✈️"}
      </em>
    </footer>
  );
}
