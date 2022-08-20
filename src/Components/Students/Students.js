import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <section className="mt-5">
      <div className="text-center p-3">
        <h1>
          Meet Our Successful <br /> Students
        </h1>
        <p>
          It is a long established fact that a reader will be distracted by the{" "}
          <br />
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="row g-4">
        {students.map((student) => (
          <Card
            className="col-lg-3 col-sm-12 mx-auto shadow  p-0"
            key={student.id}
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={student.image} />
            <Card.Body>
              <Card.Title>{student.name}</Card.Title>
              <Card.Text>{student.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Students;
