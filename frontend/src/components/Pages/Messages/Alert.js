import React from "react";

//import { Link } from "react-router-dom";

const Alert = (props) => {
  const mensajes = props.mensajes

  return (
    <div className={"m-alert m-alert--" + props.clase}>
      <ul className="o-ui-list">
        {mensajes && mensajes.map((mensaje) => (
          <li key={mensaje}>- {mensaje}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default Alert;
