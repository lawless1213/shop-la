import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [] 
	},
	reducers: {
		addToCart(state, action) {
			let {id} = action.payload;
			let product = state.products.find(e => e.id === id);
			if(!product) {
				product = {};

				product.id = id;
				product.count = 1;
				product.info = action.payload;
				
				return {...state, products: [...state.products, product]}
			} else {
				product.count++;
			}
		},
		removeFromCart(state, action){
			let id = action.payload;
			let product = state.products.find(e => e.id === id);
			console.log(id);
			console.log(product);

			if(product.count === 1) {
				return {...state, products: [...state.products.filter(pr => pr.id !== id)]}
			} else {
				product.count--;
			}
		}
	}
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;