import { createSlice } from "@reduxjs/toolkit";
import { SIGNUP, LOGIN } from "../actions/user";
import toast from "react-hot-toast";

const initialState = {
  signupError: "",
  signupStatus: false,
  loginStatus: false,
  logoutStatus: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    // CLEARSTATE: (state) => {
    //   state.deleteStatus = false;
    //   state.updateStatus = false;
    //   state.createStatus = false;
    //   state.showCreateModal = false;
    // },
    LOGOUT: (state) => {
      state.logoutStatus = true;
      state.loginStatus = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SIGNUP.pending, (state) => {
        state.error = "";
      })
      .addCase(SIGNUP.fulfilled, (state, { payload }) => {
        if (payload.status) {
          state.signupStatus = true;
          toast.success(payload.message);
          return;
        }
        toast.error(payload.response.data.message);
      })
      .addCase(SIGNUP.rejected, (state, { error }) => {
        state.error = error.message;
      })
      .addCase(LOGIN.pending, (state) => {
        state.error = "";
      })
      .addCase(LOGIN.fulfilled, (state, { payload }) => {
        if (payload.status) {
          state.loginStatus = true;
          localStorage.setItem("user", JSON.stringify(payload.user));
          toast.success(payload.message);
          return;
        }
        toast.error(payload.response.data.message);
      })
      .addCase(LOGIN.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

const userReducer = user.reducer;

export { userReducer };
export const { LOGOUT } = user.actions;
