import React, {useState} from 'react'

export const Form = ({addTareas}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add Tareas
          addTareas(value);
          // Limpiar caja de texto
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="Form">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="tareas-input" placeholder='¿Que tareas realizaras hoy?' />
    <button type="submit" className='Tareas-btn'>Agregar</button>
  </form>
  )
}
