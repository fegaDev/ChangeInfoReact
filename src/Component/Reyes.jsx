import React, { useState } from "react";

const Reyes = () => {
  const reyesGodos = [
    {
      key: 0,
      nombre: "Ataulfo",
      aficion: "comer toros sin pelar",
    },
    {
      key: 1,
      nombre: "Recesvinto",
      aficion: "leer a hegel en arameo",
    },
    {
      key: 2,
      nombre: "teodorico",
      aficion: "la cria del escarabajo en almibar",
    },
  ];

  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState();

  /**
   **    *Crea una funcion para cambiar por cada click! 
    *!    Preferible , crear un contador para llevar un controlador de click's
   * */

  const handleButton = () => {
    setContador(contador + 1);  //*Contador sumando cada 1 click*/
    if (contador + 1 >= reyesGodos.length) {   //* Contador evaluado por el largo deL Array */
      setContador(0);
    }
    setMensaje(
      <h2>
        El primero es: <span>{reyesGodos[contador].nombre}</span> es{" "}
        <span>{reyesGodos[contador].aficion}</span>
      </h2>
    );
  };

  return (
    <div>
      <button type="button" onClick={handleButton}>
        Ver siguiente
      </button>
      <div>{mensaje}</div>
    </div>
  );
};

export default Reyes;
