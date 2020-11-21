import React from "react";
import Navbar from "./componentes/NavBar";
import Slider from "./componentes/Slider";
import About from "./componentes/About";
import ComoParticipar from "./componentes/ComoParticipar";
import BotonArriba from "./componentes/BotonArriba";
import Donar from "./componentes/Donar";
//import Contacto from "./componentes/Contacto";
import Footer from "./componentes/Footer";
import Nosotros from "./componentes/Nosotros";
import DonarPage from "./componentes/DonarPage";
import Coordinadores from "./componentes/Coordinadores";
import Voluntarios from "./componentes/Voluntarios";
import Lista from "./componentes/Lista";
import OtrasFormas from "./componentes/OtrasFormas";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Navbar />

      <BotonArriba />

      <Switch>
        <Route
          exact
          path="/"
          children={
            <>
              <Slider />
              <About />
              <Donar />
              <ComoParticipar />
            </>
          }
        />

        <Route
          exact
          path="/nosotros"
          children={
            <>
              <Nosotros />
              <Coordinadores/>
              <Voluntarios />
            </>
          }
        />

        <Route
          exact
          path="/donar"
          children={
            <>
              <DonarPage />
            </>
          }
        />

        <Route
          exact
          path="/comedores"
          children={
            <>
              <Lista />
            </>
          }
        />
        <Route
          exact
          path="/OtrasFormas"
          children={
            <>
            <OtrasFormas />
            </>
          }
        />
      </Switch>

      <Footer />
      <Redirect to="/" />
    </Router>
  );
}

export default Routes;
//
