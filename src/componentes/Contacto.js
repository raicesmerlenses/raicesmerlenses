import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import Container from "react-bootstrap/Container";

const Contacto = () => {
  return (
    <>
      <section id="contacto" className="section4">
        <Container className="text-center">
          <a
            href="https://www.facebook.com/raices.merlo/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="redes" src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/raicesmerlenses/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="redes" src={instagram} alt="instagram" />
          </a>{" "}
        </Container>
      </section>
    </>
  );
};

export default Contacto;
