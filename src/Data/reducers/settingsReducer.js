import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		asideMenu: false,
		asideFilter: false,
	},
	reducers: {
		toggleAsideMenuState(state, action){
			return {...state, asideMenu: !state.asideMenu}
		},
		toggleAsideFilterState(state, action){
			return {...state, asideMenu: !state.asideMenu}
		}
	}
})

export const {toggleAsideMenuState, toggleAsideFilterState} = settingsSlice.actions;
export default settingsSlice.reducer;