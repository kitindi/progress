import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "John",
    lastName: "Jube",
    gender: "M",
    class: "Form 4C",
    yearJoined: "2023",
  },
];

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
  },
});

export const { addStudent } = studentSlice.actions;

export default studentSlice.reducer;
