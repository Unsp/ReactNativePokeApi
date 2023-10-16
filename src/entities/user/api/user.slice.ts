import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, UserState } from "../types/user.types";
import { hashPassword } from "src/shared/lib/utils/passwordUtils";

const initialState: UserState = {
  userList: [
    {
      username: "login",
      password: hashPassword("password"),
      email: "user@email.com",
    },
  ],
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.userList.push(action.payload);
    },
    setActiveUser(state, action: PayloadAction<IUser | undefined>) {
      state.activeUser = action.payload;
      state.isLoggedIn = !!action.payload;
    },
  },
});

export default userSlice;
export const userReducer = userSlice.reducer;
