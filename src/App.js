import "./App.css";
import { useState, useEffect } from "react";

import { v4 as uuid } from "uuid";
import Todoform from "./Todoform";

import TodoList from "./TodoList";

function App() {
  const storeItems = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(storeItems);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const clearList = () => {
    console.log("hello clearList");
  };

  return (
    <div className="container mt-3">
      <Todoform
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
