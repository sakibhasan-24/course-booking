export default function Course({ course }) {
  console.log(course);
  return (
    <div className="w-1/2 p-2 border-2">
      <div className="w-full mx-auto border-4">
        <img
          className="w-full h-[300px] rounded-3xl p-2"
          src={course.courseImg}
          alt="img"
        />
      </div>
      <div className="m-3 p-1 ">
        <h2 className="text-3xl text-center font-extrabold tracking-wide text-gray-600">
          {course.courseName}
        </h2>
        <h3 className="text-xl text-center my-3 text-gray-700">
          {course.text}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-extralight">
            {" "}
            ${" "}
            <span className="text-4xl font-extrabold text-indigo-950">
              {course.price}
            </span>
          </p>
          <p className="text-2xl font-bold text-gray-500">
            Credit <span className="text-3xl">{course.creditHour}</span> hr
          </p>
        </div>
        <p className="text-xl text-blue-950 font-bold my-4">
          <span className="text-xs"> instructor:</span>
          {course.instructorName}
        </p>
        <button className="bg-green-800 text-yellow-50 border-0 py-2 w-full cursor-pointer px-8 rounded-xl text-2xl">
          Enroll
        </button>
      </div>
    </div>
  );
}
