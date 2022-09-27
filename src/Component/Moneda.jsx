import React, { useState } from "react";

const Moneda = () => {
  const [cantidad, setCantidad] = useState(0);
  const [resEuro, setResEuro] = useState();
  const [resDolar, setResDolar] = useState();
  const [resPesoArg, setResPesoArg] = useState();
  const [resPesoMex, setResPesoMex] = useState();
  const [resLibra, setResLibra] = useState();
  const [resRublo, setResRublo] = useState();

  const handleMoneda = (e) => {
    setCantidad(e.target.value);
    setResDolar((e.target.value * 0.25).toFixed(2));
    setResEuro((e.target.value * 0.26).toFixed(2));
    setResPesoArg((e.target.value * 37.12).toFixed(2));
    setResPesoMex((e.target.value * 5.16).toFixed(2));
    setResLibra((e.target.value * 0.24).toFixed(2));
    setResRublo((e.target.value * 14.85).toFixed(2));
  };
  return (
    <div className="monedaContainer">
      <p className="ingresarCantidad">Soles</p>
      <input
        type="number"
        className="ingreso"
        value={cantidad}
        onChange={handleMoneda}
      />
      <div className="tipoMonedas">
        <div className="euro">
          <p>Euro</p>
          <input type="number" value={resEuro} readOnly maxLength={4} />
        </div>
        <div className="dolar">
          <p>Dolar</p>
          <input
            type="number"
            onChange={handleMoneda}
            value={resDolar}
            readOnly
            maxLength={4}
          />
        </div>
        <div className="pesoArgentino">
          <p>P.Argentino</p>
          <input type="number" value={resPesoArg} readOnly maxLength={4} />
        </div>

        <div className="pesoMexicano">
          <p>P.Mexicano</p>
          <input type="number" value={resPesoMex} readOnly maxLength={4} />
        </div>
        <div className="libraEsterlina">
          <p>Libra Esterlina</p>
          <input type="number" value={resLibra} readOnly maxLength={4} />
        </div>
        <div className="rublo">
          <p>Rublo</p>
          <input type="number" value={resRublo} readOnly maxLength={4} />
        </div>
      </div>
    </div>
  );
};

export default Moneda;
