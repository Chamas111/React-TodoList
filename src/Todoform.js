import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

const Todoform = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (title, id, completed) => {
    const newItem = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newItem);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      const newItem = { id: uuid(), title: input, completed: false };
      setTodos([...todos, newItem]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="add todo task"
            value={input}
            onChange={handleChange}
            required
          />
          <button className="btn btn-outline-primary" type="submit">
            {editTodo ? "Save" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Todoform;
