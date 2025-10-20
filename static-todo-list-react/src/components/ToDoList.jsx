import React from "react";

export default function ToDoList() {
  const tasks = [
    "Learn React",
    "Build a project",
    "Read documentation"
  ];

  return (
    <section>
      <ul className="todo">
        {tasks.map((task, i) => (
          <li key={i} className="todo-item">
            <span className="dot" aria-hidden="true" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
