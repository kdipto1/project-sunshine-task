import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="mt-4">
      <div className="text-center p-3">
        <h1>
          Discover Our Popular <br /> Courses
        </h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable <br /> content of a page when looking at its layout.
        </p>
      </div>
      <div className="row g-4">
        {services.slice(0, 4).map((service) => (
          <Card
            className="col-lg-3 col-sm-12 mx-auto shadow p-0"
            key={service.id}
            style={{ width: "18rem" }}
          >
            <Card.Img className="p-1" variant="top" src={service.image} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Card.Text className="fw-bold">price: {service.price}$</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link
                className="btn btn-outline-primary"
                to={`/course/${service.id}`}
                variant="outline-primary"
              >
                Buy Course
              </Link>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
