import React, { useState } from "react";

import { Link } from "react-router-dom";

import useUser from "../../../hooks/useUser";

const Header = () => {
  const { isLogged, tokenSession } = useUser();

  return (
    <header className="g-header">
      <Link to="/" className="g-header__brand">
        <img src="/img/logo.png" alt="Logo del sitio" />
      </Link>

      <nav className="g-header__nav">
        <ul className="o-ui-list o-ui-list--horizontal">
          <li>Inicio</li>
          <li>Instalaciones</li>
          <li>Torneos</li>
          <li>Reservas</li>
        </ul>
      </nav>

      {isLogged ? (
        <Link to="/logout" className="g-header__login">
          {JSON.parse(tokenSession).username}
        </Link>
      ) : (
        <Link to="/login" className="g-header__login">
          Iniciar sesión
        </Link>
      )}
    </header>
  );
};

export default Header;
