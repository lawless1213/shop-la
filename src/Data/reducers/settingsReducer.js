import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		asideMenu: false,
		asideFilter: false,
	},
	reducers: {
		toggleAsideMenuState(state, action){
			document.body.classList.toggle("aside_open");
			return {...state, asideMenu: !state.asideMenu, aside: !state.aside}
		},
		toggleAsideFilterState(state, action){
			document.body.classList.toggle("aside_open");
			return {...state, asideFilter: !state.asideFilter, aside: !state.aside}
		}
	}
})

export const {toggleAsideMenuState, toggleAsideFilterState} = settingsSlice.actions;
export default settingsSlice.reducer;