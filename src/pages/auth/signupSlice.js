import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    fullName: "Abdulaziz",
    email: "abdulaziz@gmail.com",
    password: "abdulaziz",
    passwordConfirm: "abdulaziz",
  },
];

const signupSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { createUser } = signupSlice.actions;
export default signupSlice.reducer;
