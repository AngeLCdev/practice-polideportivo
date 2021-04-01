import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useUser from "../../hooks/useUser";
import pathAuth from "./../../config/routing/path/auth.path";
import Alert from "./../Pages/Messages/Alert";

const Register = () => {
  const [username, setUsername] = useState();
  const [correo, setCorreo] = useState();
  const [password, setPassword] = useState();
  const [mensajes, setMensajes] = useState();

  const { isLogged } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usuario = { username, password, correo };

    const commandLogin = await fetch("http://localhost:4000/api/usuarios", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    const res = await commandLogin.json();

    await setMensajes(res.message);
  };

  useEffect(() => {
    if (isLogged) window.location.href = "/";
  }, [isLogged]);
  return (
    <div className="o-container">
      <>
        <h3>Para continuar, registrese.</h3>

        <form onSubmit={handleSubmit}>
          <div className="m-form__container">
            <input
              type="text"
              className="m-form__field"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="" className="m-form__floating-label ">
              Nombre de usuario
            </label>
          </div>

          <div className="m-form__container">
            <input
              type="email"
              className="m-form__field"
              onChange={(e) => setCorreo(e.target.value)}
            />
            <label htmlFor="" className="m-form__floating-label ">
              Email
            </label>
          </div>

          <div className="m-form__container">
            <input
              type="password"
              className="m-form__field"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="" className="m-form__floating-label ">
              Contraseña
            </label>
          </div>

          <button className="a-btn">Registrarse</button>
          <p>
            Si ya tiene cuenta, puede{" "}
            <Link to={pathAuth.login}>iniciar sesión</Link>
          </p>
        </form>
      </>

      {mensajes ? <Alert clase="danger" mensajes={mensajes} /> : ""}
    </div>
  );
};

export default Register;
