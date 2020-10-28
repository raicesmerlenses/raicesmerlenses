import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Nosotros = () => {
  return (
    <>
      <Container id="nosotros" className="text-center nosotros">
        <h1 className="title-nosotros">#Nosotros</h1>

        <p className="description">
          <span> Raíces Merlenses </span>es un grupo de personas dispuestas a
          brindar lo mejor de sí para poder ayudar al otro desde todos los
          aspectos posibles. Tiene sus orígenes en la <span> E.E.M. Nº 16</span>
          , allá por el 2012, cuando se presentó como una lista para el centro
          de estudiantes que inculcara los valores de solidaridad. El grupo
          creció, aparecieron nuevas personas, y esa solidaridad y esos valores
          empezaron a recorrer las calles de Merlo visitando diferentes
          comedores, merenderos, escuelas, jardines y asociaciones.  En la
          actualidad frecuentamos <span>más de 20 comedores y merenderos</span>{" "}
          y brindamos nuestra ayuda a todos aquellos vecinos que estén
          atravesando una situación particular por diferentes factores. No hay
          una bandera política compartida, ni intereses que vayan más allá de
          nuestra simple intención de dar lo mejor de cada uno.{" "}
          <span>Raíces somos muchos!</span> Los que se fueron y se mantienen en
          contacto, los que ponen el cuerpo en cada jornada, los que nos acercan
          colaboraciones, los que recorren barrios a pie para llegar hasta el
          más vulnerable.  No solo tratamos de llevar elementos materiales, como
          alimentos o vestimenta, sino que también llevamos juegos, abrazos,
          escucha y cariño. Con mucho o poco,{" "}
          <span>
            estamos convencidos que lo más importante es estar con el otro y que
            ese otro sepa que acá hay equipo, y que nunca los vamos a dejar
            solos.
          </span>
        </p>
        <button className="btn-about">
          <Link to="/donar">Donar!</Link>
        </button>
      </Container>
    </>
  );
};

export default Nosotros;
