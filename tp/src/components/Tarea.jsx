function Tarea({ tarea, toggleCompletada, eliminarTarea }) {
    return (
        <div className="tarea">
  <span className={tarea.completada ? "texto-tarea completada" : "texto-tarea"}>
    {tarea.texto}
  </span>
  <div className="botones">
    <button onClick={() => completarTarea(tarea.id)}>✔</button>
    <button onClick={() => eliminarTarea(tarea.id)}>✖</button>
  </div>
</div>


    );
  }
  
  export default Tarea;


  