import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="">
      <div className="text-center p-3">
        <h1>
          Discover Our Popular <br /> Courses
        </h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable <br /> content of a page when looking at its layout.
        </p>
      </div>
      <div>
        {services.slice(0, 4).map((service) => (
          <div key={service.id}>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
