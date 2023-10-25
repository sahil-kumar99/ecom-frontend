import { createSlice } from "@reduxjs/toolkit";
import { GETPRODUCT, SEARCHPRODUCT } from "../actions/product";
import toast from "react-hot-toast";

const initialState = {
  products: [],
  error: "",
  searchResults: [],
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
      })
      .addCase(SEARCHPRODUCT.pending, (state) => {
        state.error = "";
      })
      .addCase(SEARCHPRODUCT.fulfilled, (state, { payload }) => {
        if (payload.status) {
          state.products = [...payload?.results];
        }
      })
      .addCase(SEARCHPRODUCT.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

const productReducer = product.reducer;

export { productReducer };
