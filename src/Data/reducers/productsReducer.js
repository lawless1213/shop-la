import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		items: [],
		total: 0
	},
	reducers: {
		setProducts(state, action) {
			return {...state, items: [...action.payload]}
		},
		addProducts(state, action) {
			return {...state, items: [...state.items, ...action.payload]}
		},
		setTotal(state, action){
			return {...state, total: action.payload}
		}
	}
})

export const {setProducts, addProducts, setTotal} = productsSlice.actions;
export default productsSlice.reducer;