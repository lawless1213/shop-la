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
		incrementCount: (state, action) => {
      let id = action.payload;
			let product = state.products.find(pr => pr.id === id);
      product.count++;
    },
		decrementCount: (state, action) => {
      let id = action.payload;
			let product = state.products.find(e => e.id === id);
			console.log(product);
      product.count > 1 ? product.count-- : product.count = 1;
    },
		removeFromCart(state, action){
			let id = action.payload;
			return {...state, products: [...state.products.filter(pr => pr.id !== id)]}
		},
		removeAllCart(state){
			return {...state, products: []}
		}
	}
})

export const {addToCart, incrementCount, decrementCount, removeFromCart, removeAllCart} = cartSlice.actions;
export default cartSlice.reducer;