import React from 'react';
import TaskDueDate from './TaskDueDate';

// Rep la tasca i les funcions de manipulació per 'props'
const TaskItem = ({ task, onToggleComplete, onDeleteTask, onPriorityChange, onUpdateTaskDate }) => {
  return (
    <li className={`task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`}>
      <div className={`priority-bar priority-${task.priority}`}></div>
      
      {/* Contenedor principal con layout vertical */}
      <div className="task-main-content">
        {/* Fila superior: Nombre de la tarea */}
        <div className="task-content">
          <span onClick={() => onToggleComplete(task.id)}>
            {task.text}
          </span>
        </div>
        
        {/* Fila inferior: Selector de fecha (debajo del nombre) */}
        <TaskDueDate
          taskId={task.id}
          dueDate={task.dueDate}
          onUpdateTaskDate={onUpdateTaskDate}
        />
      </div>
      
      {/* Controles a la derecha (prioridad y eliminar) */}
      <div className="task-controls">
        <div className="priority-selector">
          <button 
            className={`priority-btn high ${task.priority === 'high' ? 'active' : ''}`}
            onClick={() => onPriorityChange(task.id, 'high')}
            title="Alta"
          >
            ⚠️
          </button>
          <button 
            className={`priority-btn medium ${task.priority === 'medium' ? 'active' : ''}`}
            onClick={() => onPriorityChange(task.id, 'medium')}
            title="Media"
          >
            🔶
          </button>
          <button 
            className={`priority-btn low ${task.priority === 'low' ? 'active' : ''}`}
            onClick={() => onPriorityChange(task.id, 'low')}
            title="Baja"
          >
            🟢
          </button>
        </div>
        
        <button 
          className="delete-btn" 
          onClick={() => onDeleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
