import { createSlice } from '@reduxjs/toolkit';
import courses from '../data/courses';
import students from '../data/student';

const initialState = {
  courses: courses,
  students:students,
  enrolledCourses: students.flatMap(student =>
    student.enrolledCourses.map(courseId =>
      ({ ...courses.find(course => course.id === courseId), studentId: student.id })
    )
  ),
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    markCourseCompleted: (state, action) => {
      const course = state.enrolledCourses.find(c => c.id === action.payload);
      if (course) {
        course.completed = true;
      }
    },
  },
});

export const { markCourseCompleted } = coursesSlice.actions;
export default coursesSlice.reducer;
