import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SIGNUP = createAsyncThunk("SIGNUP_USER", async (signupData) => {
  console.log("----signup data---", signupData);
  try {
    const response = await axios.post(
      "http://localhost:8000/user/signup",
      signupData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

const LOGIN = createAsyncThunk("LOGIN_USER", async (loginData) => {
  console.log("----signup data---", loginData);
  try {
    const response = await axios.post(
      "http://localhost:8000/user/login",
      loginData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export { SIGNUP, LOGIN };
