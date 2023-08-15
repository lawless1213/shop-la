import { configureStore } from "@reduxjs/toolkit";
// import shopReducer from "../reducer/shopReducer";

let store  = configureStore({
	reducer: {
		// shop: shopReducer,
	}
})

export default store;