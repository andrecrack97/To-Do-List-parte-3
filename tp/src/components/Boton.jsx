function Boton({ texto, tipo = "button", onClick }) {
    return (
      <button type={tipo} onClick={onClick}>
        {texto}
      </button>
    );
  }
  
  export default Boton;
  