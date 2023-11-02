import KeyPoint from "./KeyPoint";

export default function Course({ course, handleEnrollCourse }) {
  return (
    <div className="border-4 max-w-7xl y-2t ">
      <div>
        <img
          src={course.courseImg}
          className="lg:p-2 md:rounded-3xl md:h-44 w-full"
          alt={course.courseName}
        />
      </div>
      <div className="my-6 text-center h-[180px]">
        <h1 className="text-gray-700 text-2xl   bg-red-200 font-extrabold">
          {course.courseName}
        </h1>
        <p className="text-gray-500 mt-2 mx-2">{course.text}</p>
      </div>
      <div className="mb-0 flex justify-between items-center mx-3 ">
        <p className="text-xl tracking-tight font-bold text-orange-600">
          price :${" "}
          <span className="text-2xl  font-bold tracking-wide">
            {course.price}
          </span>
        </p>
        <p className="text-xl tracking-tight">
          Credit{" "}
          <span className="text-gray-600 text-2xl font-extrabold">
            {course.creditHour}{" "}
          </span>
          hr
        </p>
      </div>
      <p className="text-center my-4 bg-blue-900  text-white font-bold rounded-lg py-1 px-2 mx-2">
        Course Instructor :{course.instructorName}
      </p>
      <div className="min-h-0">
        <button
          disabled={course.disabled}
          onClick={() => handleEnrollCourse(course)}
          className="bg-green-400  py-2  lg:px-5 rounded-xl 
          w-full md:w-1/2 lg:w-3/4 mx-0 lg:ml-5 md:ml-4 my-2 font-bold text-2xl text-white"
        >
          Enroll
        </button>
      </div>
      <KeyPoint course={course.hashtag} />
    </div>
  );
}
/*  ensuring efficient operations, effective leadership, and strategic decision-making."and coordinating of resources and activities to achieve organizational goals */
