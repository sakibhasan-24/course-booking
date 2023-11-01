export default function Enrolls({ enrollCourse }) {
  return (
    <div className="w-full bg-gray-200">
      <h1 className="p-2  text-center">
        Credits Hour Remaining <span className="text-2xl font-bold">20</span> hr
      </h1>
      <hr className="border-b-4 border-gray-500 w-3/4 mx-auto" />
      <h1 className="text-4xl">Course Name</h1>

      <div>
        {enrollCourse.map((course, i) => (
          <p key={course.id}>
            {i + 1}:{course.courseName}
          </p>
        ))}
      </div>
    </div>
  );
}
