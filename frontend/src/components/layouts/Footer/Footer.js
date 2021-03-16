import React, {useEffect} from "react";

//import { Link } from "react-router-dom";

const Footer = () => {

  const setFooter = () => {
    const footerName = document.getElementById("g-footer__name");
    const anyo = new Date();
    footerName.innerHTML = `&copy; ${anyo.getFullYear()}`;
  }

  useEffect(() => {
    setFooter();
    
    
  }, []);
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
      <div id="g-footer__name"></div>
    </footer>
  );
};

export default Footer;
