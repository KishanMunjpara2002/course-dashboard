import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markCourseCompleted } from '../redux/CourseSlice';
import ProgressBar from './Progressbar';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => state.courses.enrolledCourses);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      {enrolledCourses.length === 0 ? (
        <p>No enrolled courses.</p>
      ) : (
        enrolledCourses.map(course => (
          <div key={course.id} className="border rounded-lg shadow-lg mb-6 p-4 flex items-center">
            <img src={course.thumbnail} alt={course.name} className="w-24 h-24 object-cover rounded mr-4" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{course.name}</h2>
              <p className="text-gray-700">Instructor: {course.instructor}</p>
              <ProgressBar progress={course.completed ? 100 : 50} />
            </div>
            <button
              className={`ml-auto px-4 py-2 rounded ${course.completed ? 'bg-green-500 hover:bg-green-700' : 'bg-blue-500'} text-white`}
              onClick={() => dispatch(markCourseCompleted(course.id))}
            >
              {course.completed ? 'Completed' : 'Mark as Completed'}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentDashboard;
