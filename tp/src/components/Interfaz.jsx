import { useState } from 'react';


const Interfaz = ({ agregarTarea, eliminarCompletadas, setFiltro }) => {
  const [texto, setTexto] = useState("");

  const manejarEnvio = () => {
    if (texto.trim()) {
      agregarTarea(texto);
      setTexto("");
    }
  };

  return (
    <>
      <h1>Lista de Tareas Xeneize</h1>
      <div className="entrada-tarea">
        <input
          type="text"
          placeholder="Agregar una nueva tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button onClick={manejarEnvio}>Agregar</button>
      </div>

      <div className="filtros">
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button onClick={() => setFiltro("completadas")}>Completadas</button>
      </div>

      <button id="eliminarCompletadas" onClick={eliminarCompletadas}>
        Eliminar Completadas
      </button>
    </>
  );
};

export default Interfaz;
