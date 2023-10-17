import { createSlice } from "@reduxjs/toolkit";
import { GETPRODUCT } from "../actions/product";
import toast from "react-hot-toast";

const initialState = {
  //   signupError: "",
  //   signupStatus: false,
  //   loginStatus: false,
  //   logoutStatus: false,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GETPRODUCT.pending, (state) => {
        state.error = "";
      })
      .addCase(GETPRODUCT.fulfilled, (state, { payload }) => {
        console.log('---get products---', payload);
        if (payload.status) {
          state.signupStatus = true;
          //   toast.success(payload.message);
          return;
        }
        toast.error(payload.response.data.message);
      })
      .addCase(GETPRODUCT.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

const productReducer = product.reducer;

export { productReducer };
