import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "../components/students/studentSlice";
import usersReducer from "../pages/auth/signupSlice";

export const store = configureStore({
  reducer: { students: studentsReducer, users: usersReducer },
});
