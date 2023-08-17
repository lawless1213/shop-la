import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../../data/reducers/productsReducer";
import cartReducer from "../reducers/cartReducer";
import blogReducer from "../reducers/blogReducer";

let store  = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		blog: blogReducer,
	}
})

export default store;