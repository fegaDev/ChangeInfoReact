import React, { useState } from "react";

const Mensajes = [
  {
    id: 1,
    author: "Ermenegildo",
    desc: "Yo se que puedo , si! - se que puedo",
  },
  {
    id: 2,
    author: "Argibaldo",
    desc: "Yo se que puedo más, si! - se que puedo más",
  },
  {
    id: 3,
    author: "Concentrao",
    desc: "Yo se que puedo , Mucho más ! - se que puedo mucho más!",
  },
];

function Frase() {
  const [mensaje, setMensaje] = useState();
  const [contador , setContador] = useState(0);
  
  const handleEvent = () => {
    setContador(contador+1)
    if(contador+1 >= Mensajes.length){
        setContador(0)
    }
    setMensaje(
        <>
      <h3 style={{color:'red'}}>
        {Mensajes[contador].author} :
        <span style={{ color: "green" }}>{Mensajes[contador].desc}</span>
      </h3>
      </>
    );
  };

  return (
    <div>
      <button onClick={handleEvent}>Ver Siguiente</button>
      <div>{mensaje}</div>
    </div>
  );
}

export default Frase;
