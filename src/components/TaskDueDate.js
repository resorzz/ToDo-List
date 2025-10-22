import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import { ca } from 'date-fns/locale'; // Locale català

// Rep l'ID, la data actual i la funció d'actualització
const TaskDueDate = ({ taskId, dueDate, onUpdateTaskDate }) => {
  // Si dueDate existeix, la parseja com a objecte Date
  const dateValue = dueDate ? new Date(dueDate) : null;

  // La funció que s'executa en seleccionar una nova data
  const handleDateChange = (newDate) => {
    onUpdateTaskDate(taskId, newDate);
  };

  return (
    <div className="task-date-container">
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ca}>
        <DatePicker
          label="Data Límit"
          value={dateValue}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} size="small" />}
          slotProps={{
            textField: {
              size: 'small',
              variant: 'outlined'
            }
          }}
        />
      </LocalizationProvider>
      
      {/* Opcionalment, mostrar la data formatada */}
      {dueDate && (
        <p className="due-date-display">
          Límit: {format(dateValue, 'dd/MM/yyyy', { locale: ca })}
        </p>
      )}
    </div>
  );
};

export default TaskDueDate;
