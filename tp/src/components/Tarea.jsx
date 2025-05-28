import React from 'react';
import './Tarea.css';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={`tarea-contenedor ${completada ? 'completada' : ''}`}>
      <span className="texto-tarea">{texto}</span>
      <div className="botones-tarea">
        <button className="boton-completar" onClick={() => completarTarea(id)}>✔</button>
        <button className="boton-eliminar" onClick={() => eliminarTarea(id)}>✖</button>
      </div>
    </div>
  );
}

export default Tarea;
