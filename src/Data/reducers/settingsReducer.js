import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		themeMode: JSON.parse(localStorage.getItem("mode")) || "light",
		asideMenu: false,
		asideFilter: false,
		aside: false,
		modal: false,
		modalType: '',
	},
	reducers: {
		toggleAsideMenuState(state, action){
			return {...state, asideMenu: !state.asideMenu, aside: !state.aside}
		},
		toggleAsideFilterState(state, action){
			return {...state, asideFilter: !state.asideFilter, aside: !state.aside}
		},
		toggleTheme(state, action) {
			let newTheme = state.themeMode === "light" ? "dark" : "light";
			localStorage.setItem("mode", JSON.stringify(newTheme));
			return {...state, themeMode: newTheme}
		},
		openModal(state, action) {
			return {...state, modalType: action.payload, modal: true}
		},
		closeModal(state, action) {
			return {...state, modalType: '', modal: false}
		}
	}
})

export const {toggleAsideMenuState, toggleAsideFilterState, toggleTheme, openModal, closeModal} = settingsSlice.actions;
export default settingsSlice.reducer;