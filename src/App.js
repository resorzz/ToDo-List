import React, { useState } from "react";
import "./App.css";

function App() {
  // Estat per emmagatzemar la llista de tasques
  const [tasks, setTasks] = useState([
    // Exemple de tasques inicials
    { id: 1, text: "Aprendre React", completed: false },
    { id: 2, text: "Fer la compra", completed: true },
    { id: 3, text: "Ir a Malaga", completed: true },
    { id: 2, text: "Pasear por Malaga con Marghe", completed: true },
  ]);

  // Estat per guardar el valor de l'input de nova tasca
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    // Evitem que el formulari recarregui la pàgina
    e.preventDefault();
    if (newTask.trim() === "") return; // No afegim tasques buides

    const task = {
      id: Date.now(), // ID únic basat en el timestamp
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]); // Afegim la nova tasca a l'array existent
    setNewTask(""); // Netegem l'input
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

  return (
    <div className="todo-container">
      <h1>La Meva Llista de Tasques</h1>
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Afegeix una nova tasca..."
        />
        <button type="submit">Afegir</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => handleToggleComplete(task.id)}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

