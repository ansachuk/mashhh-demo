import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {
		firstName: null,
		lastName: null,
		email: null,
	},
	token: null,
	isAuth: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
});

export default authSlice.reducer;
