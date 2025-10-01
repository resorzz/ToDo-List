import React, { useState } from "react";
import "./App.css";

const PRIORITIES = ["high", "medium", "low"];

function App() {
  // Estat per emmagatzemar la llista de tasques
  const [tasks, setTasks] = useState([
    // Exemple de tasques inicials
    { id: 1, text: "Aprendre React", completed: false, priority: "medium" },
    { id: 2, text: "Fer la compra", completed: false, priority: "low" },
    { id: 3, text: "Ir a Malaga", completed: false, priority: "high" },
    { id: 4, text: "Pasear por Malaga con Marghe", completed: false, priority: "high" },
  ]);


  // Estat per guardar el valor de l'input de nova tasca
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("medium");

  const handleAddTask = (e) => {
    // Evitem que el formulari recarregui la pàgina
    e.preventDefault();
    if (newTask.trim() === "") return; // No afegim tasques buides

    const task = {
      id: Date.now(), // ID únic basat en el timestamp
      text: newTask,
      completed: false,
      priority: newPriority,
    };

    setTasks([...tasks, task]); // Afegim la nova tasca a l'array existent
    setNewTask(""); // Netegem l'input
    setNewPriority("medium");
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handlePriorityChange = (taskId, priority) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, priority } : task
      )
    );
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>La Meva Llista de Tasques</h1>
        <form onSubmit={handleAddTask} className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Afegeix una nova tasca..."
          />
          <div className="priority-selector">
            {PRIORITIES.map((p) => (
              <button
                key={p}
                type="button"
                className={`priority-btn ${p} ${newPriority === p ? "active" : ""}`}
                onClick={() => setNewPriority(p)}
                aria-label={`Prioritat ${p}`}
              >
                {p === "high" ? "⚠️" : p === "medium" ? "🔶" : "🟢"}
              </button>
            ))}
          </div>
          <button type="submit">Afegir</button>
        </form>
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item priority-${task.priority} ${task.completed ? "completed" : ""}`}
            >
              <div className={`priority-bar priority-${task.priority}`}></div>
              <div className="task-content">
                <span onClick={() => handleToggleComplete(task.id)}>
                  {task.text}
                </span>
              </div>
              <div className="task-controls">
                <div className="priority-selector">
                  {PRIORITIES.map((p) => (
                    <button
                      key={p}
                      type="button"
                      className={`priority-btn ${p} ${task.priority === p ? "active" : ""}`}
                      onClick={() => handlePriorityChange(task.id, p)}
                      aria-label={`Canvia a prioritat ${p}`}
                    >
                      {p === "high" ? "⚠️" : p === "medium" ? "🔶" : "🟢"}
                    </button>
                  ))}
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

