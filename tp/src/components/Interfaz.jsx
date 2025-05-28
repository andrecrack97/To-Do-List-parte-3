import { useState } from 'react';
import Boton from './Boton';

function Interfaz({ onAgregar }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAgregar(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Boton texto="Agregar" tipo="submit" />
    </form>
  );
}

export default Interfaz;
