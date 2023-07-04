import { createAsyncThunk } from "@reduxjs/toolkit";
import { post, defaults } from "axios";

defaults.baseURL = "https://connections-api.herokuapp.com/";

const setAuthJWTHeader = token => {
	defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthJWTHeader = () => {
	defaults.headers.common.Authorization = "";
};

const login = createAsyncThunk("auth/login", async (cred, { rejectWithValue }) => {
	try {
		const { data } = await post(``, cred);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

const signup = createAsyncThunk("auth/signup", async (cred, { rejectWithValue }) => {
	try {
		const { data } = await post(``, cred);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
	try {
		const { data } = await post(``);
		clearAuthJWTHeader();
		return data;
	} catch (e) {
		rejectWithValue(e.message);
	}
});

export { signup, login, logout };
