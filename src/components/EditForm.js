import React, {useState} from 'react'

export const EditForm = ({editTareas, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit Tareas
        editTareas(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="Form">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="tareas-input" placeholder='Actualizar tarea' />
    <button type="submit" className='Tareas-btn'>Actualizar</button>
  </form>
  )
}
