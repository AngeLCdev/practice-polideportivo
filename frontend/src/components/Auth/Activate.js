import React, { useEffect, useState, useCallback } from "react";

import { useParams } from "react-router";
import useUser from "../../hooks/useUser";

const Activate = () => {
  const { codigo } = useParams();
  const [mensaje, setMensaje] = useState("Estamos activando la cuenta");
  const { login } = useUser();

  const activateUser = useCallback(async () => {
    const CodigoJson = { codigo_email: codigo };
    const command = await fetch(
      "http://localhost:4000/api/usuarios",
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(CodigoJson),
      },
      []
    );

    const res = await command.json();
    setMensaje(res.message)
    
    if (res.token) {
      login(res);
      window.location.href = "/";
    }
  });

  useEffect(() => {
    activateUser();
  }, [activateUser]);

  return (
    <div className="o-container" id="mensajeActivate">{mensaje}</div>
  );
};

export default Activate;
