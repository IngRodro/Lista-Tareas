import React, { useState, useEffect } from "react";
import { Tarea } from "./Tarea";
import { Form } from "./Form";
import { v4 as uuidv4 } from "uuid";
import { EditForm } from "./EditForm";

export const Wrapper = () => {
  const [TareasList, setTareasList] = useState([])

    useEffect(() => {
        const savedTareasList = JSON.parse(localStorage.getItem('TareasList')) || [];
        setTareasList(savedTareasList);
    }, []);

    const addTareas = Tareas => {
        const newTareasList = [...TareasList, {id: uuidv4(), task: Tareas, completed: false, isEditing: false}];
        setTareasList(newTareasList);
        localStorage.setItem('TareasList', JSON.stringify(newTareasList));
    }

    const toggleComplete = id => {
        const newTareasList = TareasList.map(Tareas => Tareas.id === id ? {...Tareas, completed: !Tareas.completed} : Tareas);
        setTareasList(newTareasList);
        localStorage.setItem('TareasList', JSON.stringify(newTareasList));
    }

    const deleteTareas = id => {
        const newTareasList = TareasList.filter(Tareas => Tareas.id !== id);
        setTareasList(newTareasList);
        localStorage.setItem('TareasList', JSON.stringify(newTareasList));
    }

    const editTareas = id => {
        setTareasList(TareasList.map(Tareas => Tareas.id === id ? {...Tareas, isEditing: !Tareas.isEditing} : Tareas))
    }

    const editTask = (task, id) => {
        const newTareasList = TareasList.map(Tareas => Tareas.id === id ? {...Tareas, task, isEditing: !Tareas.isEditing} : Tareas);
        setTareasList(newTareasList);
        localStorage.setItem('TareasList', JSON.stringify(newTareasList));
    }
  return (
    <div className='Wrapper'>
        <h1>Lista de Tareas</h1>
        <Form addTareas={addTareas} />
        {TareasList.map((Tareas, index) => (
            Tareas.isEditing ? (
                <EditForm editTareas={editTask} task={Tareas} />
            ) : (
                <Tarea task={Tareas} key={index} toggleComplete={toggleComplete} deleteTareas={deleteTareas} editTareas={editTareas} />
            )
        ))}
    </div>
  )
};
