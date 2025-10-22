import React, { useState } from 'react';

// Rep la funció per afegir la tasca (que es troba a App.js) per 'props'
const TaskForm = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState(''); // Estat local per l'input
  const [newPriority, setNewPriority] = useState('medium'); // Estat local per la prioritat

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;
    
    // Crida la funció del pare, passant-li el text i la prioritat de la tasca
    onAddTask(newTaskText, newPriority);
    
    setNewTaskText(''); // Neteja l'input
    setNewPriority('medium'); // Reseteja la prioritat a medium
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Afegeix una nova tasca..."
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />

      <div className="priority-selector">
        <button
          type="button"
          className={`priority-btn high ${newPriority === 'high' ? 'active' : ''}`}
          onClick={() => setNewPriority('high')}
          title="Alta"
        >
          ⚠️
        </button>
        <button
          type="button"
          className={`priority-btn medium ${newPriority === 'medium' ? 'active' : ''}`}
          onClick={() => setNewPriority('medium')}
          title="Media"
        >
          🔶
        </button>
        <button
          type="button"
          className={`priority-btn low ${newPriority === 'low' ? 'active' : ''}`}
          onClick={() => setNewPriority('low')}
          title="Baja"
        >
          🟢
        </button>
      </div>

      <button type="submit" className="btn btn--primary">
        Afegir
      </button>
    </form>
  );
};

export default TaskForm;
