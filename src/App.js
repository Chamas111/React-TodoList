import "./App.css";
import { useState } from "react";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";

import TodoList from "./TodoList";

function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setItems({ items: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: uuid(), title };
    setItems([...items, newItem]);
    console.log("hello handleSubmit");
    console.log(newItem);
  };
  const clearList = () => {
    console.log("hello clearList");
  };
  const handleEdit = (id) => {
    console.log(`hello handleEdit ${id}`);
  };
  const handleDelete = (id) => {
    console.log(`hello handleDelete ${id}`);
  };

  return (
    <div className="container">
      <TodoInput
        item={items.task}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <TodoList
        items={items.task}
        clearList={clearList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
