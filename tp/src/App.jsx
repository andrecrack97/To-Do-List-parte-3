import { useEffect, useState } from 'react';
import Interfaz from './components/Interfaz';
import ListaTarea from './components/ListaTareas';
import './index.css';
import './Styles.css';
import roman from './assets/fotos/roman.jpg';
import escudo from './assets/fotos/escudo.jpg';


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
    <div className="contenedor-general">
      <img src={roman} alt="roman" height="400" width="330" className="img-costado" />
  
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
  
      <img src={escudo} alt="Escudo de Boca Juniors" height="400" width="400" className="img-costado" />
    </div>
  );
  
};

export default App;
