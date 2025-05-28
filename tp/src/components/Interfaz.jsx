import { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";
import Boton from "./Boton";

function Interfaz() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(tareasGuardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    const tarea = { id: Date.now(), texto: nuevaTarea, completada: false };
    setTareas([...tareas, tarea]);
    setNuevaTarea("");
  };

  const eliminarCompletadas = () => {
    setTareas(tareas.filter(t => !t.completada));
  };

  const tareasFiltradas = tareas.filter(t =>
    filtro === "todas" ? true :
    filtro === "pendientes" ? !t.completada : t.completada
  );

  return (
    <div className="contenedor">
      <h1>LISTA DE TAREAS<br/>XENEIZE</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Agregar una nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <Boton texto="Agregar" onClick={agregarTarea} />
      </div>
      <div className="filtros">
        <Boton texto="Todas" onClick={() => setFiltro("todas")} />
        <Boton texto="Pendientes" onClick={() => setFiltro("pendientes")} />
        <Boton texto="Completadas" onClick={() => setFiltro("completadas")} />
      </div>
      <ListaTareas tareas={tareasFiltradas} setTareas={setTareas} />
      <button className="eliminar" onClick={eliminarCompletadas}>
        Eliminar Completadas
      </button>
    </div>
  );
}



export default Interfaz;
