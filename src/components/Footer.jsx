export default function Footer({items}) {
  if (items.length === 0) return <footer className="stats">Shopping list is empty</footer>;
  else if (items.length === 1) {
    const checkedItems = items.filter((item) => item.checked === true).length;
    const percentage = Math.round((checkedItems / 1) * 100);

    return (
      <footer className="stats">
        1 item on shopping list, {checkedItems} item have been purchased ({percentage}%)
      </footer>
    );
  } else {
    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked === true).length;
    const percentage = Math.round((checkedItems / totalItems) * 100);
    return (
      <footer className="stats">
        {totalItems} items on shopping list, {checkedItems} items have been purchased ({percentage}%)
      </footer>
    );
  }
}
