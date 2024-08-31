import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './CourseSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export default store;
