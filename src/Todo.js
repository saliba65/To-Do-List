import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    console.log("handleToDo");
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <p>oi</p>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
