import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../../data/reducers/productsReducer";
import cartReducer from "../reducers/cartReducer";

let store  = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
	}
})

export default store;