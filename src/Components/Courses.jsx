import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
// import AddCourse from "./AddCourse";
import Enrolls from "./Enrolls";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [enrollCourse, setEnrollCourses] = useState([]);
  const [remainingTime, setRemainingTime] = useState(20);
  const [creditTime, setCreditTime] = useState(0);
  const handleEnrollCourse = (enroll) => {
    // console.log(enroll);
    const alreadyEnrolledCourse = enrollCourse.filter(
      (course) => course.id !== enroll.id
    );
    // remaining time is <0 then no course will add
    // credit hour ===20 no course will add
    const totalCreditHour = enroll.creditHour + creditTime;
    if (totalCreditHour <= 20) {
      setRemainingTime(remainingTime - enroll.creditHour);
      setCreditTime(totalCreditHour);

      return setEnrollCourses([...alreadyEnrolledCourse, enroll]);
    }
    // const newCreditHour = creditTime + enroll.creditHour;
    // console.log(newCreditHour);
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
      <Enrolls
        enrollCourse={enrollCourse}
        remainingTime={remainingTime}
        creditTime={creditTime}
      />
    </div>
  );
}
