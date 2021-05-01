import React, { useState, useEffect } from "react";

import Pista from "./Pista/Pista";



const Pistas = (props) => {
  const [deporte, setDeporte] = useState(props.deporte);
  const [pistas, setPistas] = useState();
  

  const getPistas = async () => {
    const command = await fetch(
      `http://localhost:4000/api/maestros/pistas/deporte/${deporte._id}`
    )
      .then((res) => res.json())
      .then((data) => setPistas(data));
  };

  useEffect(() => {
    getPistas();
  }, []);

  return (
    <div className="m-reservas">
      <div className="m-reservas__title">{deporte.nombre}</div>
      <div className="m-reservas__pistas">
        {pistas
          ? pistas.map((datosPista) => (
              <Pista pista={datosPista} key={datosPista._id} />
            ))
          : "No hay deportes"}
      </div>
    </div>
  );
};

export default Pistas;
