import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  //Fetch tasks from local storage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  //Save tasks to local storage on change
  useEffect(() => {
    if (!todos.length) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (Event) => {
    setNewTodo(Event.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const value = e.target.elements["new-todo"].value;

    if (value.trim()) {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: JSON.stringify(value), completed: false },
      ]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (todoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const handleToggleCompleted = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todoId == todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <input
          name="new-todo"
          type="text"
          value={newTodo}
          placeholder="Add a new task..."
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${todo.completed ? "completed" : null}`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo.id)}
            />
            <span>{todo.text}</span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
