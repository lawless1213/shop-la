import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		categories: ['all'],
		items: [],
		loadState: false,
		filters: {},
		total: 0
	},
	reducers: {
		setCategories(state, action) {
			return {...state, categories: [...state.categories,...action.payload]}
		},
		setProducts(state, action) {
			return {...state, items: [...action.payload]}
		},
		addProducts(state, action) {
			return {...state, items: [...state.items, ...action.payload]}
		},
		setTotal(state, action){
			return {...state, total: action.payload}
		},
		setLoadState(state, action){
			console.log(action.payload);
			return {...state, loadState: action.payload}
		},
	}
})

export const {setCategories, setProducts, addProducts, setTotal, setLoadState} = productsSlice.actions;
export default productsSlice.reducer;