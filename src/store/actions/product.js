import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GETPRODUCT = createAsyncThunk("GET_PRODUCT", async (loginData) => {
  try {
    const response = await axios.get(
      //   "https://ecom-server-v9a4.onrender.com/product/get",
      "http://localhost:8000/product/get"
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

export { GETPRODUCT };
