import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import cover1 from "../../Images/cover1.png";
import cover3 from "../../Images/cover3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={cover1} alt="First slide" />
        <Carousel.Caption>
          <h3>Get Started Digital Learning</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cover3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Get Started Digital Learning</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;