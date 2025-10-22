import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  // Estat per emmagatzemar la llista de tasques (amb dueDate)
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprendre React", completed: false, priority: "medium", dueDate: null },
    { id: 2, text: "Hacer la compra", completed: false, priority: "low", dueDate: new Date().toISOString() },
    { id: 3, text: "Carnet de conducir", completed: false, priority: "high", dueDate: null },
    { id: 4, text: "CompTIA Net+", completed: false, priority: "high", dueDate: null },
    { id: 5, text: "Hola", completed: false, priority: "high", dueDate: null },
  ]);

  // Modifiquem la funció per rebre directament el 'text' i 'priority' des de TaskForm
  const handleAddTask = (text, priority) => {
    const task = {
      id: Date.now(),
      text: text,
      completed: false,
      priority: priority,
      dueDate: null, // Nou camp
    };
    
    setTasks([...tasks, task]);
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

  // NOVA FUNCIÓ per actualitzar només la data
  const handleUpdateTaskDate = (taskId, newDate) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId 
          ? { ...task, dueDate: newDate ? newDate.toISOString() : null } 
          : task
      )
    );
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>La Meva Llista de Tasques</h1>

        {/* Component TaskForm */}
        <TaskForm onAddTask={handleAddTask} />

        {/* Component TaskList amb la nova prop onUpdateTaskDate */}
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
          onPriorityChange={handlePriorityChange}
          onUpdateTaskDate={handleUpdateTaskDate}
        />
      </div>
    </div>
  );
}

export default App;
