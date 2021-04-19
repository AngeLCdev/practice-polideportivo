import React from "react";

const Instalaciones = (props) => {
  const { tipo, titulo, imagen } = props;
  return (
    <div
      className="m-instalaciones"
      style={{
        backgroundImage: `url(./img/pistas/${imagen}.jpg)`,
      }}
    >
      <div className="m-instalaciones__tipo">{tipo}</div>
      <div className="m-instalaciones__title">{titulo}</div>
    </div>
  );
};

export default Instalaciones;
