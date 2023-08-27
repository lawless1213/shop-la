import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		asideMenu: false,
		asideFilter: false,
	},
	reducers: {
		toggleAsideState(state, action){
			return {...state, aside: !state.aside}
		}
	}
})

export const {toggleAsideState} = settingsSlice.actions;
export default settingsSlice.reducer;