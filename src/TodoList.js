import React from "react";
import Todoform from "./Todoform";
import { v4 as uuid } from "uuid";
import { CiEdit, CiTrash } from "react-icons/ci";

function TodoList({ todos, setTodos, setEditTodo }) {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((item) => item.id !== id));
    console.log("hello, ");
  };

  const handleComplete = ({ todo }) => {
    setTodos(
      todos.map((item) => {
        if (item.id == todo.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  const handleEdit = ({ id }) => {
    const todoFind = todos.find((item) => item.id === id);
    setEditTodo(todoFind);
  };

  return (
    <div>
      {todos.map((todo) => (
        <ul className="list-group" key={todo.id}>
          <li className="list-group-item list-group-item-primary">
            <div className="container ">
              <div className="d-flex justify-content-center gap-3 p-3 mt-1">
                <input
                  type="checkbox"
                  className="mt-2"
                  onChange={() => handleComplete({ todo })}
                />
                <input
                  className="mt-1"
                  type="text"
                  value={todo.title}
                  onChange={(e) => e.preventDefault()}
                />

                <div className="d-flex gap-2"></div>
                <button
                  type="submit"
                  className="mt-1"
                  onClick={() => handleEdit(todo)}
                >
                  <CiEdit />
                </button>
                <button
                  type="submit"
                  className="mt-1"
                  onClick={() => handleDelete(todo)}
                >
                  <CiTrash />
                </button>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
export default TodoList;
