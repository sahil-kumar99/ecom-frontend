import { createSlice } from "@reduxjs/toolkit";
import { BUYPRODUCT, GETORDERS } from "../actions/order";
import toast from "react-hot-toast";

const initialState = {
  orders: [],
  orderHistory: [],
  orderSuccess: false,
  error: "",
};

const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    CLEARORDER: (state) => {
      state.orderSuccess = false;
      state.orders = [];
      state.orderHistory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(BUYPRODUCT.pending, (state) => {
        state.error = "";
      })
      .addCase(BUYPRODUCT.fulfilled, (state, { payload }) => {
        if (payload.status) {
          state.orderSuccess = true;
          state.orders = [...payload?.order?.products];
          toast.success(payload.message);
        }
      })
      .addCase(BUYPRODUCT.rejected, (state, { error }) => {
        state.error = error.message;
      })
      .addCase(GETORDERS.pending, (state) => {
        state.error = "";
      })
      .addCase(GETORDERS.fulfilled, (state, { payload }) => {
        if (payload.status) {
          state.orderHistory = [...payload?.orders];
          //   toast.success(payload.message);
        }
      })
      .addCase(GETORDERS.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

const orderReducer = order.reducer;

export { orderReducer };
export const { CLEARORDER } = order.actions;
