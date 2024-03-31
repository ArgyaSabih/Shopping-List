import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export default function Form({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const uuid = uuidv4();
    const newItem = {name: name, quantity: quantity, checked: false, id: uuid};
    onAddItem(newItem);

    console.log(newItem);
    setName("");
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((x, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What are you shopping for today?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="item names..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Add</button>
    </form>
  );
}
