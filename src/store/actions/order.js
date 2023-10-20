import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthorizationConfig } from "../../helper";

const BUYPRODUCT = createAsyncThunk(
  "BUY_PRODUCT",
  async ({ cart, totalAmount }) => {
    try {
      const config = getAuthorizationConfig();
      const response = await axios.post(
        "https://ecom-server-v9a4.onrender.com/order/createOrder",
        // "http://localhost:8000/order/createOrder",
        { products: cart, totalAmount },
        config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const GETORDERS = createAsyncThunk("GET_ORDERS", async () => {
  try {
    const config = getAuthorizationConfig();
    const response = await axios.post(
      "https://ecom-server-v9a4.onrender.com/order/getOrders",
      //   "http://localhost:8000/order/getOrders",
      {},
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
});
export { BUYPRODUCT, GETORDERS };
