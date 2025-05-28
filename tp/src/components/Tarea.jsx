const Tareas = ({ tarea, completar, eliminar }) => {
    return (
      <li className={tarea.completada ? "completada" : ""}>
        <span>{tarea.texto}</span>
        <button onClick={completar}>✔</button>
        <button onClick={eliminar}>✖</button>
      </li>
    );
  };
  
  export default Tareas;
  