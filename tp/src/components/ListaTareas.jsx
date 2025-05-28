import Tareas from './Tarea';



const ListaTarea = ({ tareas, completarTarea, eliminarTarea, filtro }) => {
  const filtrar = (tarea) => {
    if (filtro === "pendientes") return !tarea.completada;
    if (filtro === "completadas") return tarea.completada;
    return true;
  };

  return (
    <ul>
      {tareas.filter(filtrar).map((tarea, index) => (
        <Tareas
          key={index}
          tarea={tarea}
          completar={() => completarTarea(index)}
          eliminar={() => eliminarTarea(index)}
        />
      ))}
    </ul>
  );
};

export default ListaTarea;
