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
	reducers: {
		toggleAuth: state => {
			state.isAuth = !state.isAuth;
		},
	},
});

export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;
