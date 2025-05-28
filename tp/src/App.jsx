import React, { useState, useEffect } from 'react';
import './App.css';
import ListaTareas from "./components/ListaTareas";


function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    setTareas(tareasGuardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completada: false
    };
    setTareas([nuevaTarea, ...tareas]);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <div className="App">
      <h1>LISTA DE TAREAS XENEIZE</h1>
      <ListaTareas
        tareas={tareas}
        agregarTarea={agregarTarea}
        completarTarea={completarTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
