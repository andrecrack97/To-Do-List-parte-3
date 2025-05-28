function Tarea({ tarea, onToggle, onDelete }) {
    return (
      <li className={tarea.completada ? 'completed' : ''}>
        <span onClick={onToggle}>{tarea.texto}</span>
        <button onClick={onDelete}>❌</button>
      </li>
    );
  }
  
  export default Tarea;
  