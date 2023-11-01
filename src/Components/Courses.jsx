import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
// import AddCourse from "./AddCourse";
import Enrolls from "./Enrolls";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [enrollCourse, setEnrollCourses] = useState([]);
  const handleEnrollCourse = (enroll) => {
    // console.log(enroll);
    setEnrollCourses([...enrollCourse, enroll]);
  };

  useEffect(() => {
    fetch("../../public/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className=" max-w-6xl  my-20  flex gap-20 ">
      <section className="max-w-4xl ml-2 grid grid-cols-3 gap-5">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleEnrollCourse={handleEnrollCourse}
          />
        ))}
      </section>
      <Enrolls enrollCourse={enrollCourse} />
    </div>
  );
}
