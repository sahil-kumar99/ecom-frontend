import { createSlice } from "@reduxjs/toolkit";
import {
  SIGNUP,
  LOGIN,
  ADDTOWISHLIST,
  REMOVEFROMWISHLIST,
  ADDTOCART,
  REMOVEFROMCART,
} from "../actions/user";
import toast from "react-hot-toast";

const initialState = {
  signupError: "",
  signupStatus: false,
  loginStatus: false,
  logoutStatus: false,
  wishlist: [],
  cart: [],
  cartSize: null,
  authButtonLoader: true,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    LOGOUT: (state) => {
      state.wishlist = [];
      state.cart = [];
      state.cartSize = null;
      state.logoutStatus = true;
      state.loginStatus = false;
      state.signupStatus = false;
    },
    UPDATEWISHLIST: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    UPDATEWISHREMOVE: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
    },
    CARTSIZE: (state) => {
      state.cartSize = state.cart.length;
    },
    CLEARCART: (state) => {
      state.cart = [];
      state.cartSize = state.cart.length;
    },
    LOADER: (state) => {
      state.authButtonLoader = true;
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
        state.authButtonLoader = false;
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
          state.cart = [...user?.cart];
          state.cartSize = user?.cart.length;
          state.authButtonLoader = false;
          toast.success(payload.message);
          return;
        }
        toast.error(payload.response.data.message);
        state.authButtonLoader = false;
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
          toast.success(payload.message);
          return;
        }
        toast.error(payload.message);
      })
      .addCase(REMOVEFROMWISHLIST.rejected, (state, { error }) => {
        state.error = error.message;
      })
      .addCase(ADDTOCART.pending, (state) => {
        state.error = "";
      })
      .addCase(ADDTOCART.fulfilled, (state, { payload }) => {
        console.log('---add to cart paylad---', payload);
        if (payload.status) {
          state.cart = [...state.cart, payload?.product];
          state.cartSize = state.cart.length;
          toast.success(payload.message);
        }
      })
      .addCase(ADDTOCART.rejected, (state, { error }) => {
        state.error = error.message;
      })
      .addCase(REMOVEFROMCART.pending, (state) => {
        state.error = "";
      })
      .addCase(REMOVEFROMCART.fulfilled, (state, { payload }) => {
        if (payload.status) {
          state.cart = state.cart.filter(
            (item) => item._id !== payload.product._id
          );
          state.cartSize = state.cart.length;
          toast.success(payload.message);
          return;
        }
        toast.error(payload.message);
      })
      .addCase(REMOVEFROMCART.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

const userReducer = user.reducer;

export { userReducer };
export const {
  LOGOUT,
  UPDATEWISHLIST,
  UPDATEWISHREMOVE,
  CARTSIZE,
  CLEARCART,
  LOADER,
} = user.actions;
