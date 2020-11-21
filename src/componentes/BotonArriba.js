import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

const BotonArriba = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Container style={{ maxWidth: "100%" }}>
      <button className="boton-arriba" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </Container>
  );
};

export default BotonArriba;
