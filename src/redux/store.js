import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/authSlice";
import cartSlice from "./cart/cartSlice";
import metaSlice from "./meta/metaSlice";

const store = configureStore({
	reducer: {
		auth: authSlice,
		cart: cartSlice,
		meta: metaSlice,
	},
});

export default store;
