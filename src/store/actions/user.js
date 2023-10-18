import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user")) || "";
const config = {
  headers: {
    Authorization: `Bearer ${user?.token}`,
  },
};
const SIGNUP = createAsyncThunk("SIGNUP_USER", async (signupData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/user/signup",
      signupData
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

const LOGIN = createAsyncThunk("LOGIN_USER", async (loginData) => {
  try {
    const response = await axios.post(
      // "https://ecom-server-v9a4.onrender.com/user/login",
      "http://localhost:8000/user/login",
      loginData
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

const ADDTOWISHLIST = createAsyncThunk("ADD_TO_WISHLIST", async (prodId) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/wishlist/add",
      { productId: prodId },
      config
    );
    return response.data;
  } catch (err) {
    return err;
  }
});
const REMOVEFROMWISHLIST = createAsyncThunk(
  "REMOVE_FROM_WISHLIST",
  async (prodId) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/wishlist/remove",
        { productId: prodId },
        config
      );
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

export { SIGNUP, LOGIN, ADDTOWISHLIST, REMOVEFROMWISHLIST };
