import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import donar from "../images/bank.svg";
import "../css/Donar.css";

const Donar = () => {
  return (
    <>
      <section id="donar" className="section2"></section>
      <Container fluid="true" className="donar">
        <h1 className="titulo">#Donar</h1>
        <div className="flex">
          <div>
            <img fluid="true" src={donar} className="icon" alt="Donar"></img>
          </div>

          <div>
            <p className="help">Ayudanos a ayudar!</p>
            <p className="donar2">
              Hacé tu donación con el monto que elijas desde Mercado Pago. Los
              habitantes de Merlo estarán muy agradecidos.
            </p>
            <Link to="/donar">
              <button className="btn-btn mb-4">Donar!</button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Donar;
//className="d-flex align-items-stretch justify-content-center text-center
