import { createSlice } from "@reduxjs/toolkit";
import {
  SIGNUP,
  LOGIN,
  ADDTOWISHLIST,
  REMOVEFROMWISHLIST,
} from "../actions/user";
import toast from "react-hot-toast";

const initialState = {
  signupError: "",
  signupStatus: false,
  loginStatus: false,
  logoutStatus: false,
  wishlist: [],
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    LOGOUT: (state) => {
      state.wishlist = [];
      state.logoutStatus = true;
      state.loginStatus = false;
      state.signupStatus = false;
    },
    UPDATEWISHLIST: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    UPDATEWISHREMOVE: (state, action) => {
      state.wishlist = [...state.wishlist.splice(0, action.payload)];
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
          state.logoutStatus = false;
          state.signupStatus = false;
          const { user } = payload?.user;
          localStorage.setItem("user", JSON.stringify(payload.user));
          state.wishlist = [...user?.wishlist];
          toast.success(payload.message);
          return;
        }
        toast.error(payload.response.data.message);
      })
      .addCase(LOGIN.rejected, (state, { error }) => {
        state.error = error.message;
      })
      .addCase(ADDTOWISHLIST.pending, (state) => {
        state.error = "";
      })
      .addCase(ADDTOWISHLIST.fulfilled, (state, { payload }) => {
        if (payload.status) {
          toast.success(payload.message);
        }
      })
      .addCase(ADDTOWISHLIST.rejected, (state, { error }) => {
        state.error = error.message;
      })
      .addCase(REMOVEFROMWISHLIST.pending, (state) => {
        state.error = "";
      })
      .addCase(REMOVEFROMWISHLIST.fulfilled, (state, { payload }) => {
        if (payload.status) {
          state.updateWishlist = true;
          toast.success(payload.message);
          return;
        }
        toast.error(payload.message);
      })
      .addCase(REMOVEFROMWISHLIST.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

const userReducer = user.reducer;

export { userReducer };
export const { LOGOUT, UPDATEWISHLIST, UPDATEWISHREMOVE } = user.actions;
