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
    <section className="grid">
      {services.slice(0, 4).map((service) => (
        <div>
          
        </div>
      ))}
    </section>
  );
};

export default Services;
