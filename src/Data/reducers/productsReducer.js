import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		categories: ['all'],
		items: [],
		filteredProducts: [],
		filterSettings: [],
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
		addFilter(state, action){
			return { ...state, filterSettings: [...state.filterSettings, ...action.payload]}
		}
	}
})

export const {setCategories, setProducts, addProducts, setTotal} = productsSlice.actions;
export default productsSlice.reducer;