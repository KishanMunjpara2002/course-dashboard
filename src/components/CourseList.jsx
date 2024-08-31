import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const courses = useSelector(state => state.courses.courses);

  return (
    <div className="container mx-auto p-4 bg-background">
      <h1 className="text-4xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 bg-white">
            <img src={course.thumbnail} alt={course.name} className="w-full h-64 object-cover" />
            <div className="p-4 flex flex-col justify-between ">
              <h2 className="text-2xl font-semibold">{course.name}</h2>
              <p className="mt-2">Instructor: {course.instructor}</p>
              <p className="mt-2">{course.description}</p>
              <Link to={`/course/${course.id}`}>
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded shadow-lg hover:bg-primary-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
