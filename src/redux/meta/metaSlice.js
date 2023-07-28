import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	language: "ua",
	country: "England",
	currency: "uah",
};

const metaSlice = createSlice({
	name: "meta",
	initialState,
	reducers: {
		setLanguage: (state, { payload }) => {
			state.language = payload;
		},
		setCountry: (state, { payload }) => {
			state.country = payload;
		},
		setCurrency: (state, { payload }) => {
			state.currency = payload;
		},
	},
});

export const { setLanguage, setCountry, setCurrency } = metaSlice.actions;
export default metaSlice.reducer;
