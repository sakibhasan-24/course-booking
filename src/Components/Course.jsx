export default function Course({ course }) {
  console.log(course);
  return (
    <div className="w-1/2 p-2 border-2">
      <div>
        <img
          className="w-[400px] rounded-lg"
          src={course.courseImg}
          alt="img"
        />
      </div>
      <div>
        <h2 className="text-3xl">{course.courseName}</h2>
        <h3 className="text-2xl">{course.text}</h3>
        <p className="text-3xl">
          {" "}
          $ <span className="text-4xl">{course.price}</span>
        </p>
        <p>Credit {course.creditHour} h</p>
      </div>
    </div>
  );
}
