import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CourseDetails = () => {
  const { id } = useParams();
  const course = useSelector((state) =>
    state.courses.courses.find((c) => c.id === parseInt(id))
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container border rounded-lg shadow-lg bg-white">
      <h1 className="text-4xl font-bold mb-6 mt-6">{course.name}</h1>
      <div className="flex flex-col md:flex-row">
        <img
          src={course.thumbnail}
          alt={course.name}
          className="w-full md:w-1/3 h-full object-cover rounded-lg"

        />
        <div className="md:ml-6 mt-4 md:mt-0 flex-1">
          <p className=" mb-4">
            <strong>Instructor: </strong>
            <span className="text-primary">{course.instructor}</span>
          </p>
          <p className=" mb-4">
            <strong>Description: </strong>
            {course.description}
          </p>
          <p className=" mb-4">
            <strong>Enrollment Status:</strong>{" "}
            <span
              className={`text-${
                course.enrollmentStatus === "Open" ? "green-600" : "red-600"
              }`}
            >
              {course.enrollmentStatus}
            </span>
          </p>
          <p className=" mb-4">
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className=" mb-4">
            <strong>Schedule: </strong>
            {course.schedule}
          </p>
          <p className=" mb-4">
            <strong>Location:</strong> {course.location}
          </p>
          <p className=" mb-4">
            <strong>Prerequisites:</strong> {course.prerequisites.join(", ")}
          </p>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Syllabus</h3>
            <ul className="list-disc pl-5">
              {course.syllabus.map((item, index) => (
                <li key={index} className="mb-2">
                  <strong>Week {item.week}:</strong> {item.topic} -{" "}
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
