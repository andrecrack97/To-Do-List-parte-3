import Tarea from './Tarea';

function ListaTareas({ tareas, onToggle, onDelete }) {
  return (
    <ul>
      {tareas.map(t => (
        <Tarea
          key={t.id}
          tarea={t}
          onToggle={() => onToggle(t.id)}
          onDelete={() => onDelete(t.id)}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
