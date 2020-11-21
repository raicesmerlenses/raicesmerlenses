import React from "react";
import Container from "react-bootstrap/Container";
import voluntarios from "../images/voluntarios.jpg";
import "../index.css";

const Voluntarios = () => {
  return (
    <>
      <Container fluid="true" className="text-center my-5 px-0">
        <h1 className="title">#Voluntarios</h1>

        <img
          fluid="true"
          src={voluntarios}
          className="img-vol-coor w-100 "
          alt="voluntarios raices"
        />
        <br />
        {/*   <p>fulanito menganito, chirombito y chirombita</p>*/}

        <button className="btn-volunteer m-4 ">
          <a
            href="https://docs.google.com/forms/d/1RpsRwaoy1V9PRCBjRleNEZ0vlMAEowSRi5MkSzgbUVg/edit"
            rel="noopener noreferrer"
            target="_blank"
          >
            Quiero ser voluntario!
          </a>
        </button>
      </Container>
    </>
  );
};
export default Voluntarios;
