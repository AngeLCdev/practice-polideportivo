import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Alert from "./../Pages/Messages/Alert";
import pathAuth from "./../../config/routing/path/auth.path";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [mensajes, setMensajes] = useState();

  const { login, isLogged } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = { username, password };
    const command = await fetch("http://localhost:4000/api/usuarios/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    const res = await command.json();

    if (res.token) {
      //Login correcto!
      await login(res);
    } else {
      await setMensajes(res.message);
    }
  };

  useEffect(() => {
    if (isLogged) window.location.href = "/";
  }, [isLogged]);

  return (
    <div className="o-container">
      <h3>Para continuar, inicia sesión.</h3>

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
            type="password"
            className="m-form__field"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="" className="m-form__floating-label ">
            Contraseña
          </label>
        </div>

        <button className="a-btn">Iniciar sesión</button>

        <p>
          Si no tiene cuenta, puede{" "}
          <Link to={pathAuth.registro}>registrarse</Link>
        </p>
      </form>

      {mensajes ? <Alert clase="danger" mensajes={mensajes} /> : ""}
    </div>
  );
};

export default Login;
