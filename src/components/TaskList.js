import React from 'react';
import TaskItem from './TaskItem';

// Rep la llista de tasques i les funcions per 'props' (inclosa onUpdateTaskDate)
const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onPriorityChange, onUpdateTaskDate }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onPriorityChange={onPriorityChange}
          onUpdateTaskDate={onUpdateTaskDate}
        />
      ))}
    </ul>
  );
};

export default TaskList;
