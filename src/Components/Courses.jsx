import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import Enrolls from "./Enrolls";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [enrollCourse, setEnrollCourses] = useState([]);
  const [remainingTime, setRemainingTime] = useState(20);
  const [creditTime, setCreditTime] = useState(0);

  const handleEnrollCourse = (enroll) => {
    const courseAlreadyEnrolled = enrollCourse.some(
      (course) => course.id === enroll.id
    );
    if (courseAlreadyEnrolled) {
      return alert("already add this course! try another Course");
    }
    const alreadyEnrolledCourse = enrollCourse.filter(
      (course) => course.id !== enroll.id
    );

    const totalCreditHour = enroll.creditHour + creditTime;
    if (totalCreditHour <= 20) {
      setRemainingTime(remainingTime - enroll.creditHour);
      setCreditTime(totalCreditHour);
      setEnrollCourses([...alreadyEnrolledCourse, enroll]);
    } else {
      alert("We Offer Highest 20 Credit Hour!!");
    }
  };

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h1 className="bg-green-900 text-xl lg:text-6xl md:text-3xl  mt-14 mx-auto rounded-xl p-4  text-white font-extrabold text-center w-1/2">
        Take your Course
      </h1>
      <div className="max-w-sm mx-auto md:max-w-6xl lg:max-w-7xl  my-20  flex  flex-col  gap-1 md:flex-row lg:flex-row">
        <section
          className="max-w-md  md:max-w-xl lg:max-w-5xl ml-2 grid 
        lg:mx-2
      lg:grid-cols-3 md:grid-cols-2 gap-5 order-last md:order-first lg:order-first"
        >
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              handleEnrollCourse={handleEnrollCourse}
            />
          ))}
        </section>
        <Enrolls
          enrollCourse={enrollCourse}
          remainingTime={remainingTime}
          creditTime={creditTime}
        />
      </div>
    </div>
  );
}
