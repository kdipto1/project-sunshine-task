import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  const params = useParams();
  const [courses, setCourses] = useState([]);
  console.log(params.id,"params id");
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [params.id]);
  let course = courses.find((course) => course.id === params.id);
  console.log(course);
  return (
    <section className="container vh-100 mt-4">
      <h1>Your Selected Course:</h1>
      <div></div>
    </section>
  );
};

export default Course;
