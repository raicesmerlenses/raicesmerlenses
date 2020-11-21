import React from "react";
import Contacto from "./Contacto";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-title">Raíces Merlenses</p>
      <Contacto />
      <p className="footer text-mutted text-center mb-0">
        Developed with
        <span role="img" aria-label="heart-emoji">
          ❤️
        </span>
        by Jesica, Carla , Matias y Federico.
      </p>
      <p className="footer text-mutted text-center mb-0">
      
        © 2020 Raices Merlenses ONG - Todos los derechos reservados
        
      </p>
    </div>
  );
};

export default Footer;
