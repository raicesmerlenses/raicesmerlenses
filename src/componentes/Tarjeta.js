import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import gracias from "../images/gracias.png";
import "../index.css";

const Tarjeta = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center title m-0">#Donar</h1>
        <Row className="custom-row d-flex justify-content-center">
          <img fluid="true" src={gracias} className="thanx" alt="Gracias"></img>
          <p className="help text-center">Muchas gracias por ayudarnos!</p>
          <button className="btn-tarjeta text-center">
            <Link to="/donar">Donar!</Link>
          </button>
        </Row>
      </Container>
    </div>
  );
};
export default Tarjeta;
