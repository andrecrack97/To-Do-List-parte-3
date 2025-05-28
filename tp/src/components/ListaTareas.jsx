import React, { useState } from 'react';
import Tarea from './Tarea';
import '../estilos/ListaTareas.css';

function ListaTareas({ tareas, agregarTarea, completarTarea, eliminarTarea }) {
  const [input, setInput] = useState('');

  const manejarEnvio = e => {
    e.preventDefault();
    if (input.trim()) {
      agregarTarea(input);
      setInput('');
    }
  };

  return (
    <div className="lista-tareas">
      <form onSubmit={manejarEnvio} className="formulario">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Agregar una nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>
      {tareas.map(tarea => (
        <Tarea
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto}
          completada={tarea.completada}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </div>
  );
}

export default ListaTareas;
