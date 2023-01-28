import "./App.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="container">
      <TodoInput />

      <TodoList />
    </div>
  );
}

export default App;
