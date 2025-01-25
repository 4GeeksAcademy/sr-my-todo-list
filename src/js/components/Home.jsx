import React, { useState } from "react";

// Create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>To Do List</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="your task"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item} {" "}
            <i
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index !== currentIndex)
                )
              }
            ></i>
            <button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
              <div>{todos.length} task </div>
    </div>
  );
};

export default Home;