import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
});

const selectCart = ({ cart }) => cart;

export { selectCart };
export default cartSlice.reducer;
