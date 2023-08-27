import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../../data/reducers/productsReducer";
import cartReducer from "../reducers/cartReducer";
import blogReducer from "../reducers/blogReducer";
import settingsReducer from "../reducers/settingsReducer";

let store  = configureStore({
	reducer: {
		settings: settingsReducer,
		products: productsReducer,
		cart: cartReducer,
		blog: blogReducer,
	}
})

export default store;