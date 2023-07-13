import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout } from "./operations";

const initialState = {
	user: {
		firstName: null,
		lastName: null,
		email: null,
	},
	token: null,
	isAuth: false,
	isLoading: false,
	error: null,
};

const handlePending = state => {
	state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
	state.isLoading = false;
	state.error = payload;
};

const handleFullfilled = state => {
	state.isLoading = false;
	state.error = null;
};

const handleLogin = (state, { payload: { token, user } }) => {
	handleFullfilled(state);
	state.token = token;
	state.user = user;
	state.isLoggedIn = true;
};

const handleLogout = state => {
	state.isLoggedIn = false;
	state.token = null;
	state.user = { name: null, email: null };
	state.isRefreshing = false;
	state.isLoading = false;
	state.error = null;
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(signup.fulfilled, handleLogin)
			.addCase(login.fulfilled, handleLogin)
			.addCase(logout.fulfilled, handleLogout)

			.addMatcher(action => {
				action.type.endsWith("/pending");
			}, handlePending)

			.addMatcher(action => {
				action.type.endsWith("/rejected");
			}, handleRejected);
	},
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
