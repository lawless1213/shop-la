import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../../data/reducers/productsReducer";

let store  = configureStore({
	reducer: {
		products: productsReducer,
	}
})

export default store;