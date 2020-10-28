import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Animation from "../Animation/Animation";

const DonarPage = () => {
  return (
    <>
      <Container fluid="true">
        <h1 className="donar-page text-center">#Donar</h1>
        <h4 className="text-center">
          Elegí la opción que mejor se adecue a tus posibilidades.
        </h4>
        <p className="text-center text-muted">
          Te redirigimos a <strong>Mercado Pago</strong> para que puedas
          realizar una transacción segura.
        </p>
        <div className="flex">
          <div>
            <Animation />
          </div>

          <div>
            <Row className="my-5 text-center">
              <Col>
                {" "}
                <Button
                  variant="outline-primary"
                  size="lg"
                  href="https://mpago.la/1FBEy7J"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  $50
                </Button>{" "}
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  size="lg"
                  href="https://www.mercadopago.com.ar/checkout/v1/redirect/19059d12-8f0d-40eb-913f-22e588bc326d/express/?preference-id=622736571-490d065f-c21f-4c98-844c-9f71a40e8f2c&p=7f84cd2064ab610637515b62f91602a1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  $100
                </Button>{" "}
              </Col>
            </Row>
            <Row className="my-5 text-center">
              <Col>
                <Button
                  variant="outline-primary"
                  size="lg"
                  href="https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=622736571-e87d6e93-0c85-4530-b86a-1c371912c5fd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  $200
                </Button>{" "}
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  size="lg"
                  href="https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=622736571-6c2106b5-8e56-45a3-854e-5b60a751410e"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  $300
                </Button>{" "}
              </Col>
            </Row>
            <Row className="my-5 text-center">
              <Col>
                <Button
                  variant="outline-primary"
                  size="lg"
                  href="https://www.mercadopago.com.ar/checkout/v1/redirect/e7396a6d-f322-4224-b16b-c9382bbc670b/express/?preference-id=622736571-7660d57a-9262-4f40-9fe4-9c7fc56d87f2&p=7f84cd2064ab610637515b62f91602a1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  $400
                </Button>{" "}
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  size="lg"
                  href="https://www.mercadopago.com.ar/checkout/v1/redirect/14937963-315e-4998-b0c6-4d1ad1671be7/express/?preference-id=622736571-82dae3f7-d3a8-4a16-8aba-0bfc31c92f90&p=7f84cd2064ab610637515b62f91602a1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  $500
                </Button>
              </Col>{" "}
            </Row>
            <Row>
            <Button
                className="p-1"
                variant="outline-primary"
               
                block
                href="https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=622736571-4734ebc2-69a4-470a-bed5-29fcba25e16f"
                rel="noopener noreferrer"
                target="_blank"
              >
                $1000
              </Button>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DonarPage;
