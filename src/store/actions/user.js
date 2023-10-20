import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthorizationConfig } from "../../helper";

const SIGNUP = createAsyncThunk("SIGNUP_USER", async (signupData) => {
  try {
    const response = await axios.post(
      // "http://localhost:8000/user/signup",
      "https://ecom-server-v9a4.onrender.com/user/signup",
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
      // "http://localhost:8000/user/login",
      "https://ecom-server-v9a4.onrender.com/user/login",
      loginData
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

const ADDTOWISHLIST = createAsyncThunk("ADD_TO_WISHLIST", async (prodId) => {
  try {
    const config = getAuthorizationConfig();
    const response = await axios.post(
      // "http://localhost:8000/wishlist/add",
      "https://ecom-server-v9a4.onrender.com/wishlist/add",
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
      const config = getAuthorizationConfig();
      const response = await axios.post(
        // "http://localhost:8000/wishlist/remove",
        "https://ecom-server-v9a4.onrender.com/wishlist/remove",
        { productId: prodId },
        config
      );
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const ADDTOCART = createAsyncThunk("ADD_TO_CART", async (prodId) => {
  try {
    const config = getAuthorizationConfig();
    const response = await axios.post(
      // "http://localhost:8000/cart/addCart",
      "https://ecom-server-v9a4.onrender.com/cart/addCart",
      { productId: prodId },
      config
    );
    return response.data;
  } catch (err) {
    return err;
  }
});
const REMOVEFROMCART = createAsyncThunk("REMOVE_FROM_CART", async (prodId) => {
  try {
    const config = getAuthorizationConfig();
    const response = await axios.post(
      // "http://localhost:8000/cart/removeCart",
      "https://ecom-server-v9a4.onrender.com/cart/removeCart",
      { productId: prodId },
      config
    );
    return response.data;
  } catch (err) {
    return err;
  }
});

export {
  SIGNUP,
  LOGIN,
  ADDTOWISHLIST,
  REMOVEFROMWISHLIST,
  ADDTOCART,
  REMOVEFROMCART,
};
