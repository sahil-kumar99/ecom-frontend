import { createSlice } from "@reduxjs/toolkit";
import { GETPRODUCT } from "../actions/product";
import toast from "react-hot-toast";

const initialState = {
  products: [],
  error: "",
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
        if (payload.status) {
          state.products = [...payload.products];
        }
      })
      .addCase(GETPRODUCT.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

const productReducer = product.reducer;

export { productReducer };
