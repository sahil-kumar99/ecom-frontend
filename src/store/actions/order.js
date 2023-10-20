import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user")) || "";
const config = {
  headers: {
    Authorization: `Bearer ${user?.token}`,
  },
};

const BUYPRODUCT = createAsyncThunk(
  "BUY_PRODUCT",
  async ({ cart, totalAmount }) => {
    try {
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
