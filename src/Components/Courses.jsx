import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import Enrolls from "./Enrolls";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [enrollCourse, setEnrollCourses] = useState([]);
  const [remainingTime, setRemainingTime] = useState(20);
  const [creditTime, setCreditTime] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

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
    fetch("../../public/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="max-w-md mx-auto md:max-w-4xl lg:max-w-7xl  my-20  flex  flex-col  gap-1 md:flex-row ">
      <section
        className="max-w-md  md:max-w-xl lg:max-w-5xl ml-2 grid 
        lg:mx-2
      lg:grid-cols-3 md:grid-cols-2 gap-5"
      >
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleEnrollCourse={handleEnrollCourse}
            isDisabled={isDisabled}
          />
        ))}
      </section>
      <Enrolls
        enrollCourse={enrollCourse}
        remainingTime={remainingTime}
        creditTime={creditTime}
      />
    </div>
  );
}
