import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  const params = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  let course = courses.find((course) => course?.id === params?.id);
  return (
    <section className="container vh-100 mt-4">
      <h1>Your Selected Course:</h1>
      <div className="m-3">
        <img src={course?.image} alt="" />
        <h4>Course Id: {course?.id}</h4>
        <h4>Course Name: {course?.name}</h4>
        <h4>Course Price: {course?.price}$</h4>
        <p>Description: {course?.description}</p>
        <button className="btn btn-outline-secondary">Proceed Payment</button>
      </div>
    </section>
  );
};

export default Course;
