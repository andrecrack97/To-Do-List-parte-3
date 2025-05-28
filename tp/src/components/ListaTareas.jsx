import Tarea from "./Tarea";

function ListaTareas({ tareas, setTareas }) {
  const toggleCompletada = (id) => {
    setTareas(prev =>
      prev.map(t => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

  const eliminarTarea = (id) => {
    setTareas(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ul className="lista-tareas">
      {tareas.map(t => (
        <Tarea
          key={t.id}
          tarea={t}
          toggleCompletada={toggleCompletada}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
