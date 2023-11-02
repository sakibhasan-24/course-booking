export default function Enrolls({ enrollCourse, remainingTime, creditTime }) {
  return (
    <div className="w-full bg-green-400 p-2 rounded-2xl shadow-lg h-full  ">
      {
        <>
          {remainingTime === 20 ? (
            <p className="p-2  text-center font-bold">
              {" "}
              you don't add any Course
            </p>
          ) : (
            <h1 className="p-2  text-center">
              Credits Hour Remaining
              <span className="text-2xl font-bold">{remainingTime}</span> hr
            </h1>
          )}
        </>
      }
      <hr className="border-b-4 border-gray-500 w-3/4 mx-auto" />
      <h1 className="text-2xl font-bold text-center tracking-wider text-gray-700 my-6">
        Course Name
      </h1>

      <div>
        {enrollCourse.map((course, i) => (
          <p
            className="bg-orange-300 py-1 px-3 m-4 rounded-xl text-center"
            key={course.id}
          >
            {i + 1}:{course.courseName}
          </p>
        ))}
        <h1 className="text-white text-center font-bold">
          total Credit Hour : {creditTime}
        </h1>
      </div>
    </div>
  );
}
