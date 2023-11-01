import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("../../public/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className=" mx-2  my-20 p-2">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
}
