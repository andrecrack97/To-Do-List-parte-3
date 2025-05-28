import { useEffect, useState } from 'react';
import Interfaz from './components/Interfaz';
import ListaTarea from './components/ListaTareas';
import './index.css';
import './Styles.css';

const App = () => {
  const [tareas, setTareas] = useState(() => {
    return JSON.parse(localStorage.getItem("tareas")) || [];
  });
  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false }]);
  };

  const completarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  const eliminarCompletadas = () => {
    setTareas(tareas.filter(t => !t.completada));
  };

  return (
    <div className="contenedor">
      <Interfaz
        agregarTarea={agregarTarea}
        eliminarCompletadas={eliminarCompletadas}
        setFiltro={setFiltro}
      />
      <ListaTarea
        tareas={tareas}
        completarTarea={completarTarea}
        eliminarTarea={eliminarTarea}
        filtro={filtro}
      />
    </div>
  );
};

export default App;
