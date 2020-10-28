
import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import coordinador from "../images/coordinador.png";
import coordinador2 from "../images/coordinador2.jpeg";
import coordinador3 from "../images/coordinador3.jpeg";
import coordinador4 from "../images/coordinador4.jpeg";
import "../index.css";

const Coordinadores = () => {
    return (
      <>
      <center>
        
      <Container fluid="true" className="text-center my-5 px-0">
        <h1 className="title">#Coordinadores</h1>
        <Carousel>
          <Carousel.Item>
            <img className=" w-100 img-vol-coor " src={coordinador} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-100 img-vol-coor" src={coordinador2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-100 img-vol-coor" src={coordinador3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-100 img-vol-coor" src={coordinador4} alt="Four slide" />
          </Carousel.Item>
        </Carousel>
</Container>
        </center>
      </>
  );
};
export default Coordinadores;
