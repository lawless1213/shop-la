import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		themeMode: JSON.parse(localStorage.getItem("mode")) || "light",
		asideMenu: false,
		asideFilter: false,
		aside: false,
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
		}
	}
})

export const {toggleAsideMenuState, toggleAsideFilterState, toggleTheme} = settingsSlice.actions;
export default settingsSlice.reducer;