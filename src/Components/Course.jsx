export default function Course({ course, handleEnrollCourse }) {
  console.log(course);
  return (
    <div className="border-4">
      <div>
        <img
          src={course.courseImg}
          className="p-2 rounded-3xl h-44 w-full"
          alt={course.courseName}
        />
      </div>
      <div className="my-6 text-center h-[180px]">
        <h1 className="text-gray-700 text-2xl font-extrabold">
          {course.courseName}
        </h1>
        <p className="text-gray-500 mt-2 mx-2">{course.text}</p>
      </div>
      <div className="mb-0 flex justify-between items-center mx-3 ">
        <p className="font-extralight">
          $ :{" "}
          <span className="text-2xl font-bold tracking-wide">
            {course.price}
          </span>
        </p>
        <p className="text-xl">
          Credit{" "}
          <span className="text-gray-600 text-2xl font-extrabold">
            {course.creditHour}{" "}
          </span>
          hr
        </p>
      </div>
      <p className="text-center my-4 bg-gray-600 text-white rounded-lg py-1 px-2 mx-2">
        Course Instructor :{course.instructorName}
      </p>
      <button
        onClick={() => handleEnrollCourse(course)}
        className="bg-green-400 py-2 px-5 rounded-xl w-3/4 ml-5 my-2 font-bold text-2xl text-white"
      >
        Enroll
      </button>
    </div>
  );
}
/*  ensuring efficient operations, effective leadership, and strategic decision-making."and coordinating of resources and activities to achieve organizational goals */
