import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const setAuthJWTHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//? const clearAuthJWTHeader = () => {
//? 	axios.defaults.headers.common.Authorization = "";
//? };

const login = createAsyncThunk("auth/login", async (cred, { rejectWithValue }) => {
	try {
		const { data } = await axios.post(``, cred);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

export { login };
