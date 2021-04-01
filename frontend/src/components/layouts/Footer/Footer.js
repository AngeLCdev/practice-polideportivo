import React from "react";

//import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="g-footer">
      <nav className="g-footer__nav">
        <ul className="o-ui-list o-ui-list--horizontal">
          <li>Privacidad</li>
          <li>Política de cookies</li>
          <li>Condiciones de uso</li>
          <li>Normas</li>
        </ul>
      </nav>
      <div id="g-footer__name">{`&copy; ${new Date().getFullYear()}`}</div>
    </footer>
  );
};

export default Footer;
