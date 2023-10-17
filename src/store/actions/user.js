import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
      "http://localhost:8000/user/login",
      loginData
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

export { SIGNUP, LOGIN };
