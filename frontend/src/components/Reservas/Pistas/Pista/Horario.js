import React, { useState, useEffect } from "react";

import useUser from "../../../../hooks/useUser";

const Horario = (props) => {
  const { pista } = props;

  const [horarios, setHorarios] = useState();
  const { tokenSession } = useUser();
  let clase = "";

  const horariosPistas = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const getHorarios = async () => {
    await fetch(
      `http://localhost:4000/api/maestros/reservas/horarios/${pista._id}`
    )
      .then((res) => res.json())
      .then((data) => setHorarios(data));
  };

  const handleReserva = async (horarioReserva) => {
    const hoy = new Date();
    const datosReserva = {
      inicio: `${hoy.toLocaleDateString()} ${horarioReserva}`,
      fin: `${hoy.toLocaleDateString()} ${horarioReserva}`,
      _pista: pista._id,
      _usuario: JSON.parse(tokenSession).token,
    };
    const command = await fetch("http://localhost:4000/api/maestros/reservas", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosReserva),
    });

    const res = await command.json();
    console.log(res)
  };

  useEffect(() => {
    getHorarios();
  }, []);

  return (
    <div className="m-horarios">
      {horariosPistas.map((horarioPista) => (
        <>
          {horarios
            ? horarios.forEach((horario) => {
                const horaReservaInicio = new Date(horario.inicio);
                const horaReservaFin = new Date(horario.fin);
                horarioPista === `${horaReservaInicio.getHours()}:00` ||
                horarioPista === `${horaReservaFin.getHours()}:00`
                  ? (clase = "m-horarios--cancel")
                  : (clase = "m-horarios--success");
              })
            : null}
          <div
            className={`m-horarios--hora ${clase}`}
            onClick={ () =>handleReserva(horarioPista)}
          >
            {horarioPista}
          </div>
        </>
      ))}
    </div>
  );
};

export default Horario;
