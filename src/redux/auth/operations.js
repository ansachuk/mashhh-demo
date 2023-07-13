import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

const setAuthJWTHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthJWTHeader = () => {
	axios.defaults.headers.common.Authorization = "";
};

const login = createAsyncThunk("auth/login", async (cred, { rejectWithValue }) => {
	try {
		const { data } = await axios.post("auth/login", cred);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

const signup = createAsyncThunk("auth/signup", async (cred, { rejectWithValue }) => {
	try {
		const { data } = await axios.post("auth/signup", cred);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
	try {
		const { data } = await axios.post("auth/logout");
		clearAuthJWTHeader();
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

export { signup, login, logout };
