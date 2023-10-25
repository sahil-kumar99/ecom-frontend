import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GETPRODUCT = createAsyncThunk("GET_PRODUCT", async (loginData) => {
  try {
    const response = await axios.get(
      "https://ecom-server-v9a4.onrender.com/product/get"
      // "http://localhost:8000/product/get"
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

const SEARCHPRODUCT = createAsyncThunk("SEARCH_PRODUCT", async (query) => {
  try {
    const response = await axios.get(
      // `http://localhost:8000/product/search?q=${query}`,
      `https://ecom-server-v9a4.onrender.com/product/search?q=${query}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

export { GETPRODUCT, SEARCHPRODUCT };
