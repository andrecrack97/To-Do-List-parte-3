import { useState, useEffect } from 'react';
import Interfaz from './components/Interfaz';
import ListaTareas from './components/ListaTareas';
import './Styles.css';

function App() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas');
    return guardadas ? JSON.parse(guardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    const nueva = { id: Date.now(), texto, completada: false };
    setTareas([nueva, ...tareas]);
  };

  const cambiarEstado = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <Interfaz onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} onToggle={cambiarEstado} onDelete={eliminarTarea} />
    </div>
  );
}

export default App;