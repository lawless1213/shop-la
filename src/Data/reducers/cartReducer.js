import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		wishlist: [],
		orders: [],
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
			return {...state, products: [...state.products.filter(pr => pr.id !== id)]}
		},
		removeAllCart(state){
			return {...state, products: []}
		},
		incrementCount: (state, action) => {
      let id = action.payload;
			let product = state.products.find(pr => pr.id === id);
      product.count++;
    },
		decrementCount: (state, action) => {
      let id = action.payload;
			let product = state.products.find(e => e.id === id);
      product.count > 1 ? product.count-- : product.count = 1;
    },
		addOrder: (state, action) => {
			let order = {
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				email: action.payload.email,
				date: action.payload.date
			}

			return {...state, orders: [...state.orders, order]}
		},


		toggleWishProduct(state, action) {
			let product = action.payload;
			let id = product.id;
			let isFavProduct = state.wishlist.find(p => p.id === id);

			if(!isFavProduct) {
				return {...state, wishlist: [...state.wishlist, product]}
			} else {
				return {...state, wishlist: [...state.wishlist.filter(p => p.id !== id)]}
			}
		},
		
	}
})

export const {addToCart, incrementCount, decrementCount, removeFromCart, removeAllCart, toggleWishProduct, addOrder} = cartSlice.actions;
export default cartSlice.reducer;