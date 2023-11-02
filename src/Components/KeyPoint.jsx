export default function KeyPoint({ course }) {
  return (
    <div className="flex justify-start gap-1 font-extrabold ml-1 my-4">
      <h1 className="bg-purple-900 text-white px-2 rounded-md">#{course[0]}</h1>
      <h1 className="text-white px-2 rounded-md bg-blue-950">##{course[1]}</h1>
    </div>
  );
}
