import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

//ADD JWT  TO AUTH HEADER
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//REMOVE JWT FROM AUTH HEADER
const unsetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/* 
POST @ /users/signup
BODY { name, email, password }
*/
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
POST @ /users/login
BODY { email, password }
*/
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
POST @ /users/logout
headers: { Authorization: `Bearer ${token}` }
*/
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    unsetAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
GET @ /users/current
headers: { Authorization: `Bearer ${token}` }
*/
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      console.log("Token not found");
      return thunkAPI.rejectWithValue();
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
