import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../images/carousel1.jpg";
import carousel3 from "../images/carousel2.jpg";
import carousel4 from "../images/carousel5.png";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
